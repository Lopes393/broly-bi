import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Company extends BaseSchema {
  protected tableName = 'company'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').unique().notNullable()
      table.boolean('bo_ativo').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
