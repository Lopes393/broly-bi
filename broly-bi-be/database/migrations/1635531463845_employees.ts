import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Employee extends BaseSchema {
  protected tableName = 'employee'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('cpf').unique().notNullable()
      table.string('email').unique().notNullable()
      table.boolean('bo_ativo').notNullable()
      table.timestamp('date_birth')
      table.timestamp('date_start')
      table.timestamp('date_end')
      table.integer('id_company').references('id').inTable('company').notNullable()
      table.integer('id_job').references('id').inTable('job').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
