import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Job extends BaseSchema {
  protected tableName = 'job'

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
