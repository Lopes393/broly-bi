import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payment extends BaseSchema {
  protected tableName = 'payment'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.double('value_payment').notNullable()
      table.timestamp('date_payment').notNullable()
      table.timestamp('date_reference').notNullable()
      table.string('observation').notNullable()
      table.integer('id_databank').references('id').inTable('data_bank').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
