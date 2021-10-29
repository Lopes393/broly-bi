import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DataBank extends BaseSchema {
  protected tableName = 'data_bank'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('conta').notNullable()
      table.string('agency').notNullable()
      table.integer('id_bank').references('id').inTable('bank').notNullable()
      table.integer('id_employee').references('id').inTable('employee').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
