var bdConfigs = function () {
    var schemaBuilder = function () {
        var schemaConfig = lf.schema.create('WeatherBD', 1);
        schemaConfig.createTable('tbl_weather').
            addColumn('id', lf.Type.INTEGER).
            addColumn('jsonWeather', lf.Type.STRING).
            addPrimaryKey(['id'], true);
        return schemaConfig;
    };

    return {
        schemaBuilder: schemaBuilder
    };

}();

function salvarDados(weatherObj) {
    var todoDB = null;
    var tbl_weather = null;
    bdConfigs.schemaBuilder().connect().then(function (db) {
        todoDB = db;
        tbl_weather = db.getSchema().table('tbl_weather');
        var newRow = tbl_weather.createRow({'jsonWeather': weatherObj});
        return db.insertOrReplace().into(tbl_weather).values([newRow]).exec();
    });
};

function buscarDados(app) {
    bdConfigs.schemaBuilder().connect().then(function (db) {
        return db.select().from(db.getSchema().table('tbl_weather')).exec();
    }).then(function (results) {
        results.forEach(function (row) {
            var jsonObject = JSON.parse(row['jsonWeather']);
            app.updateForecastCard(jsonObject);
        });
    });
}