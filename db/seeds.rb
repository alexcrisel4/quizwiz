# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({ email: "lizzobeemailing@gmail.com", name: "Lizzo Bee", password: "hunter" })

Quiz.create({ user_id: 1, title: "Mountains of United States", subject: "Geography"})
Quiz.create({ user_id: 1, title: "Oceans", subject: "Geography"})
Quiz.create({ user_id: 1, title: "Supporting Actress Winnters", subject: "Performing Arts"})
Quiz.create({ user_id: 1, title: "State Flowers", subject: "Fun"})
Quiz.create({ user_id: 1, title: "Countries of the World", subject: "Geography"})
Quiz.create({ user_id: 1, title: "Ocean Mammals", subject: "Science"})
Quiz.create({ user_id: 1, title: "Dogs", subject: "Specialty"})
Quiz.create({ user_id: 1, title: "Disney", subject: "Fun"})

Question.create({body: "What is the tallest mountain in the lower 48 states?"
                 quiz_id: 1, 
                 answer_one: "Mount Rushmore",
                 answer_two: "Mount Whitney",
                 answer_three: "Mount Saint Hellens",
                 answer_four: "Denali",
                 correct_answer: 2})

Question.create({body: "How many 14ers does Colorado have?"
                 quiz_id: 1, 
                 answer_one: "12",
                 answer_two: "62",
                 answer_three: "58",
                 answer_four: "72",
                 correct_answer: 3})

Question.create({body: "What is the tallest mountain East of the Mississippi?"
                 quiz_id: 1, 
                 answer_one: "Mount Michell",
                 answer_two: "Mount Elbert",
                 answer_three: "Mount Rainer",
                 answer_four: "Mount Washington",
                 correct_answer: 1})

Question.create({body: "What is the tallest mountain in the lower 48 states?"
                 quiz_id: 1, 
                 answer_one: "Mount Rushmore",
                 answer_two: "Mount Whitney",
                 answer_three: "Mount Saint Hellens",
                 answer_four: "Denali",
                 correct_answer: 2})

Question.create({body: "What is the oldest mountain range in the United States?"
                 quiz_id: 1, 
                 answer_one: "Rockies",
                 answer_two: "Appalachain",
                 answer_three: "Sierra Nevada",
                 answer_four: "Cascade",
                 correct_answer: 2})

Question.create({body: "What is the largest ocean on Earth?"
                 quiz_id: 2, 
                 answer_one: "Atlantic",
                 answer_two: "Pacific",
                 answer_three: "Southern",
                 answer_four: "Indian",
                 correct_answer: 2})

Question.create({body: "Which ocean has the most species of fish?"
                 quiz_id: 2, 
                 answer_one: "Atlantic",
                 answer_two: "Pacific",
                 answer_three: "Southern",
                 answer_four: "Indian",
                 correct_answer: 2})

Question.create({body: "Which ocean is the warmest?"
                 quiz_id: 2, 
                 answer_one: "Atlantic",
                 answer_two: "Pacific",
                 answer_three: "Southern",
                 answer_four: "Indian",
                 correct_answer: 4})                 

Question.create({body: "Which ocean is the coldest?"
                 quiz_id: 2, 
                 answer_one: "Arctic",
                 answer_two: "Pacific",
                 answer_three: "Southern",
                 answer_four: "Indian",
                 correct_answer: 1})
 
Question.create({body: "What percent of the Earth's water is in the ocean?"
                 quiz_id: 2, 
                 answer_one: "82%",
                 answer_two: "97%",
                 answer_three: "70%",
                 answer_four: "94%",
                 correct_answer: 2})    
   
Question.create({body: "Who won best supporting actress in 2017?"
                 quiz_id: 3, 
                 answer_one: "Alicia Vikander",
                 answer_two: "Regina King",
                 answer_three: "Laura Dern",
                 answer_four: "Viola Davis",
                 correct_answer: 4})              
  
Question.create({body: "What is the highest number of supporting actress awards given to one person?"
                 quiz_id: 3, 
                 answer_one: "4",
                 answer_two: "1",
                 answer_three: "2",
                 answer_four: "6",
                 correct_answer: 3})
 
Question.create({body: "When was the best supporting actress award started?"
                 quiz_id: 3, 
                 answer_one: "1968",
                 answer_two: "1929",
                 answer_three: "1948",
                 answer_four: "1936",
                 correct_answer: 4})  
 
Question.create({body: "Who has had the most supporting actress award nominations?"
                 quiz_id: 3, 
                 answer_one: "Shelly Winters",
                 answer_two: "Thelma Ritter",
                 answer_three: "Meryl Streep",
                 answer_four: "Diane Wiest",
                 correct_answer: 2}) 
 
Question.create({body: "What movie did the best supporting actress winner in 2020 come from?"
                 quiz_id: 3, 
                 answer_one: "Jojo Rabbit",
                 answer_two: "Parasite",
                 answer_three: "Marriage Story",
                 answer_four: "Little Women",
                 correct_answer: 3})  

Question.create({body: "What is the state flower of Illinois?"
                 quiz_id: 4, 
                 answer_one: "Wild Columbine",
                 answer_two: "Liverwort",
                 answer_three: "Sunfower",
                 answer_four: "Common Blue Violet",
                 correct_answer: 4})                                                                     

Question.create({body: "What is the state flower of California?"
                 quiz_id: 4, 
                 answer_one: "Minors Lettuce",
                 answer_two: "California Buckwheat",
                 answer_three: "California Poppy",
                 answer_four: "California Blackberry",
                 correct_answer: 3})

Question.create({body: "Which state has a state flower that isn't actually a flower?"
                 quiz_id: 4, 
                 answer_one: "Texas",
                 answer_two: "Alaska",
                 answer_three: "Maine",
                 answer_four: "Florida",
                 correct_answer: 3})

Question.create({body: "Which state produces the most flowers?"
                 quiz_id: 4, 
                 answer_one: "Washington",
                 answer_two: "Hawaii",
                 answer_three: "California",
                 answer_four: "Nebraska",
                 correct_answer: 3})

Question.create({body: "Which state's flower is the Forget-Me-Not?"
                 quiz_id: 4, 
                 answer_one: "Georgia",
                 answer_two: "Alaska",
                 answer_three: "Ohio",
                 answer_four: "Montana",
                 correct_answer: 2})

Question.create({body: "Which country borders the most other countries?"
                 quiz_id: 5, 
                 answer_one: "China",
                 answer_two: "Japan",
                 answer_three: "Central African Republic",
                 answer_four: "Hungary",
                 correct_answer: 1})

Question.create({body: "Which continent has the most countries?"
                 quiz_id: 5, 
                 answer_one: "Asia",
                 answer_two: "Africa",
                 answer_three: "South America",
                 answer_four: "Europe",
                 correct_answer: 2})

Question.create({body: "Which country has the longest coastline?"
                 quiz_id: 5, 
                 answer_one: "United States",
                 answer_two: "Indonesia",
                 answer_three: "Canada",
                 answer_four: "Australia",
                 correct_answer: 2})

Question.create({body: "What is the newest country?"
                 quiz_id: 5, 
                 answer_one: "Montenegro",
                 answer_two: "Palau",
                 answer_three: "Eritrea",
                 answer_four: "South Sudan",
                 correct_answer: 4})

Question.create({body: "How many countries are there in Africa?"
                 quiz_id: 5, 
                 answer_one: "45",
                 answer_two: "60",
                 answer_three: "54",
                 answer_four: "39",
                 correct_answer: 3})

Question.create({body: "How many countries are there in Africa?"
                 quiz_id: 6, 
                 answer_one: "45",
                 answer_two: "60",
                 answer_three: "54",
                 answer_four: "39",
                 correct_answer: 3})

Question.create({body: "How many taxonomic groups are marine mammals classified into?"
                 quiz_id: 6, 
                 answer_one: "6",
                 answer_two: "4",
                 answer_three: "1",
                 answer_four: "3",
                 correct_answer: 2})

Question.create({body: "What is the largest marine mammal?"
                 quiz_id: 6, 
                 answer_one: "Whale Shark",
                 answer_two: "Blue Whale",
                 answer_three: "Humpback Whale",
                 answer_four: "Walrus",
                 correct_answer: 2})

Question.create({body: "Which marine mammal 'barks' like a dog?"
                 quiz_id: 6, 
                 answer_one: "Humpback Whale",
                 answer_two: "Sea Otter",
                 answer_three: "Dolphin",
                 answer_four: "Sea Lion",
                 correct_answer: 3})

Question.create({body: "What is the rarest marin mammal?"
                 quiz_id: 6, 
                 answer_one: "Polar Bear",
                 answer_two: "Bottlenose Dolphin",
                 answer_three: "Penguin",
                 answer_four: "Vaquita",
                 correct_answer: 4})

Question.create({body: "What is the heaviest dog breed?"
                 quiz_id: 7, 
                 answer_one: "Great Dane",
                 answer_two: "Newfoundland",
                 answer_three: "English Mastiff",
                 answer_four: "Rhodesian Ridgeback",
                 correct_answer: 3})

Question.create({body: "What is the smallest breed of dog?"
                 quiz_id: 7, 
                 answer_one: "Maltese",
                 answer_two: "Pomeranian",
                 answer_three: "Chihuahua",
                 answer_four: "Yorkshire Terrier",
                 correct_answer: 3})

Question.create({body: "What is the most common dog breed in the US?"
                 quiz_id: 7, 
                 answer_one: "German Shepherd",
                 answer_two: "Golden Retriever",
                 answer_three: "Labrador Retriever",
                 answer_four: "French Bulldog",
                 correct_answer: 3})

Question.create({body: "What was the price of the Tibetan Mastiff puppy that was reportedly the most expensive puppy ever sold?"
                 quiz_id: 7, 
                 answer_one: "$20,000",
                 answer_two: "$200,000",
                 answer_three: "$2,000,000",
                 answer_four: "$20,0000,000",
                 correct_answer: 3})

Question.create({body: "How many US household have a dog?"
                 quiz_id: 7, 
                 answer_one: "40 million",
                 answer_two: "100 million",
                 answer_three: "63 million",
                 answer_four: "84 million",
                 correct_answer: 3})

Question.create({body: "What is the oldest Disney movie?"
                 quiz_id: 8, 
                 answer_one: "Cinderella",
                 answer_two: "Snow White and the Seven Dwarfs",
                 answer_three: "The Lion King",
                 answer_four: "Sleeping Beauty",
                 correct_answer: 2})

Question.create({body: "When was the Disney Classic Fantasia released?"
                 quiz_id: 8, 
                 answer_one: "1960",
                 answer_two: "1940",
                 answer_three: "1950",
                 answer_four: "1948",
                 correct_answer: 2})

Question.create({body: "Which Disney movie had the highest gross earnings?"
                 quiz_id: 8, 
                 answer_one: "The Lion King (remake 2019)",
                 answer_two: "Frozen",
                 answer_three: "The Lion King (original)",
                 answer_four: "The Incredibles",
                 correct_answer: 1})

Question.create({body: "Which Disney Pixar movie stars Tom Holland?"
                 quiz_id: 8, 
                 answer_one: "Up",
                 answer_two: "Inside Out",
                 answer_three: "Trolls",
                 answer_four: "Onward",
                 correct_answer: 4})

Question.create({body: "How many Toy Story movies are there as of 2020?"
                 quiz_id: 8, 
                 answer_one: "2",
                 answer_two: "4",
                 answer_three: "5",
                 answer_four: "3",
                 correct_answer: 2})
                 

