
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('article', function(tbl) {
            tbl.increments();
            tbl.string('title', 30);
            tbl.string('body');
            tbl.string('author', 30);
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('article');
};
