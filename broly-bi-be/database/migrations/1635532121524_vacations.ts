import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vacation extends BaseSchema {
  protected tableName = 'vacation'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('date_start').notNullable()
      table.timestamp('date_end').notNullable()
      table.string('observation')
      table.integer('days_remaining')
      table.integer('id_employee').references('id').inTable('employee').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
