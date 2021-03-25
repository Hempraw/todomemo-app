# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
SAMPLE_TASKS = [
  {
    name: 'Test Task Number 1',
  },
  {
    name: 'Test Task Number 2',
  },
  {
    name: 'Test Task Number 3',
  }
]

SAMPLE_TASKS.each do |task|
  Todomemo.create(task)
end
