# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create!({ username: 'hunter', email: 'hunter@hunter.com', password: '1234567'})


Interest.create!([{name: 'Tech'}, {name: 'Outdoors & Adventure'}, {name: 'Family'}, {name: 'Health & Wellness'}, {name: 'Sports & Fitness'}, {name: 'Learning'}, {name: 'Photography'}, {name: 'Food & Drink'}, {name: 'Writing'}, {name: 'Language & Cultue'}, {name: 'Music'}, {name: 'Movements'}, {name: 'LGBTQ'}, {name: 'Film'}, {name: 'Sci-Fi & Games'}, {name: 'Beliefs'}, {name: 'Arts'}, {name: 'Book Clubs'}, {name: 'Dance'}, {name: 'Pets'}, {name: 'Hobbies & Crafts'}, {name: 'Fashion & Beauty'}, {name: 'Social'}, {name: 'Career & Business'}])


Event.create!({
  title: 'interview help',
  description: 'come learn how to interview',
  date: 'feb 3rd',
  img_url: '',
  user_id: 1,
  interest_id: 1
})