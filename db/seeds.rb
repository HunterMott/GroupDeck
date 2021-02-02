# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Interest.destroy_all
Event.destroy_all

User.create!({ username: 'hunter', email: 'hunter@hunter.com', password: '1234567'})


Interest.create!([{name: 'Tech'}, {name: 'Outdoors & Adventure'}, {name: 'Family'}, {name: 'Health & Wellness'}, {name: 'Sports & Fitness'}, {name: 'Learning'}, {name: 'Photography'}, {name: 'Food & Drink'}, {name: 'Writing'}, {name: 'Language & Cultue'}, {name: 'Music'}, {name: 'Movements'}, {name: 'LGBTQ'}, {name: 'Film'}, {name: 'Sci-Fi & Games'}, {name: 'Beliefs'}, {name: 'Arts'}, {name: 'Book Clubs'}, {name: 'Dance'}, {name: 'Pets'}, {name: 'Hobbies & Crafts'}, {name: 'Fashion & Beauty'}, {name: 'Social'}, {name: 'Career & Business'}])


Event.create!({
  title: 'Interview Skillz Lightining Lecture!!',
  description: 'Come learn how to interview properly like a real adult and get the job you want now!',
  date: 'Feb 8th, 2021',
  img_url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  user_id: 1,
  interest_id: 1
})