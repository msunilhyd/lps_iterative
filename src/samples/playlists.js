const playlists = {
  'one': {
    slug: 'my-uber-playlist',
    title: 'My Über Playlist!',
    songs: [

      ['My Heart Will Go On', 'ENGLISH', '2013', 'Celine Dion', 'pZk_YV7yqeA', 'Let\'s talk about love'],
      ['Sadda Haq', 'HINDI', '2011', 'A R Rahman', 'QTQVG5rSMkQ', 'Rockstar'],
      ['Agar Tum Saath Ho', 'HINDI', '2015', 'A R Rahman', 'sK7riqg2mr4', 'Tamasha'],
      ['Channa Mereya Unplugged', 'HINDI', '2016', 'Pritam', 'PYzFp5o4lhE', 'Ae Dil Hai Mushkil'],
      ['A New Day Has Come (Radio Remix)', ' ENGLISH', '2000', ' Celine Dion', '8fmCwPLi954', '2000 Collection'],
      ['Khalbali', 'TELUGU', '2006', 'A R Rahman', 'wfNxbB_EG1s', 'Rang De Basanti'],
      ['Tera Hua', 'HINDI', '2018', 'Tanishk Bagichi', '-4JV4hur1PM', 'Loveyatri'],
      ['Zara si dil me de jagah tu', 'HINDI', '2008', 'Pritam', 'oiD-rVWEXjM', 'Jannat'],
      ['A New Day Has Come', ' ENGLISH', '2000', ' Celine Dion', 'ZcEqCsDflY4', '2000 Collection'],
      ['Mirrors', 'ENGLISH', '2013', 'Justin Timberlake', '_1y7F0ZzXYo', 'The 20/20 Experience'],
      ['Maa Perati Jamchettu', 'TELUGU', '1996', 'M. M. Keeravani', '_PLWJF-cOFA', 'Pelli Sandadi'],
      ['Newyork Nagaram', 'TAMIL', '2006', 'A. R. Rahman', '5WejuSV-sKU', 'Sillunu Oru Kaadhal'],
      ['Where Is My Mind?', 'ENGLISH', '1988', ' Pixies', 'N3oCS85HvpY', 'Surfer Rosa'],
      ['Demons', 'ENGLISH', '2012', 'Imagine Dragons', 'mWRsgZuwf_8', 'Continued Silence EP'],
      ['Radha', 'HINDI', '2017', 'Pritam', 'loRj95fRX1c', 'Jab Harry Met Sejal'],
      ['Sehri', 'TELUGU', '2009', 'Yuvan Shankar Raja', 'PyiQNdzKYCM', 'Oy'],
      ['Sunn Raha Hai (Female) ', 'HINDI', '2013', 'Ankit Tiwari', '49Yo4_9zNQ8', ' Aashiqui 2'],
      ['Pompeii', 'ENGLISH', '2013', 'Bastille', 'F90Cw4l-8NY', 'Bad Blood'],
      ['Cheerleader', 'ENGLISH', '2014', 'Omi', 'jGflUbPQfW8', 'Me 4 U'],
      ['Happier', 'ENGLISH', '2018', 'Marshmello', 'm7Bc3pLyij0', 'Happier'],
      ['In The End', 'ENGLISH', '2002', 'Linkin Park', 'fv1pMNdsGWE', 'Reanimation'],
      ['Taal Taal Se Taal (Western)', 'HINDI', '1999', 'AR RAHMAN', 'MelMTp_dxNQ', 'Taal'],
      ['Good Riddance', ' ENGLISH', '1997', ' Green Day', 'Nwhyj0zcD7M', ' Nimrod'],
      ['Toxicity', 'ENGLISH', '2001', 'System Of A Down', '0ukNUCQRPkI', 'Toxicity'],
      ['Cheliya Cheliya', 'TELUGU', '2004', 'Harris Jayaraj', 'A7ipnxIyyno', 'Gharshana'],
      ['Holiday', 'ENGLISH', '2004', 'Green Day', 'sO-S32xnXA0', 'American Idiot'],
      ['Something That I Already Know', ' ENGLISH', '2007', ' Backstreet Boys', 'm291VyX5dTQ', 'Unbreakable'],
      ['Befikra', 'HINDI', '2016', 'Meet Bros', 'LN07AbMX_HU', '2016 Top 10 Dance Songs'],
      ['Burn', 'ENGLISH', '2013', 'Ellie Goulding', 'J5f27dW_AS0', 'Halcyon Days'],
      ['Manasa Ottu', 'TELUGU', '2003', 'M. M. Keeravani', 'UKSjkZJsMQY', 'Pilisthe Palukutha'],
      ['Aye Khuda', 'HINDI', '2010', 'Hanif Sheikh', 'T-g39o0rDos', 'Paathshaala'],
      ['Yeh Honsla', 'HINDI', '2006', 'Salim–Sulaiman', 'Hye8yunxwIc', 'Dor'],
      ['Despocito Remix', 'SPANGLISH', '2016', 'Luis Fonsi', 'whwe0KD_rGw', 'Vida'],
      ["Livin' La Vida Loca", 'HINDI', '1999', 'Ricky Martin', 'p47fEXGabaY', 'Ricky Martin'],
      ['Vayyarala Jabilli', 'TELUGU', '2011', 'Mani Sharma', 'z4KYMafu5VY', 'Teenmaar'],
      ['On Our Way', 'ENGLISH', '2013', 'The Royal Concept', '976Hiy4M6lE', 'Goldrushed'],
      ['Falak Tak', 'HINDI', '2008', 'Vishal-Shekhar', 'PfcwlfCm7fc', 'Tashan'],
      ["It's Rocking ", 'HINDI', '2007', 'Pritam', 'TF5PU-0zyIY', 'Kya Love Story Hai'],
      ['Banjaara', 'HINDI', '2014', 'Mithoon', 'HDnLm1197oc', ' Ek Villain'],
      ['Naalo Unna Prema', 'TELUGU', '1998', 'Ramana Gogula', '2MIW_QWj484', 'Premante Idera'],
      ['Icky thump', 'ENGLISH', '2007', 'The White Stripes', 'm1KyC_LzvzQ', 'Icky Thump'],
      ['DIL DOOBA', 'HINDI', '2004', 'Ram Sampath', 'eG-cS13QWmM', 'Khakee'],
      ['Stairway To Heaven', ' ENGLISH', '1971', ' Led Zeppelin', 'QkF3oxziUI4', ' The Song Remains the Same'],
      ['Unakkenna Venum Sollu', 'TAMIL', '2015', 'Harris Jayaraj', '2OFuWfpBS-s', 'Yennai Arindhaal'],
      ['Andamaina Premarani', 'TELUGU', '1994', 'A. R. Rahman', 'kqXTFX4mNOg', 'Premikudu'],
      ['Promontory - The Last of the Mohicans', 'ENGLISH', '1992', 'Trevor Jones and Randy Edelman', '9tjdswqGGVg', 'The Last of the Mohicans'],
      ['Afghan Jalebi', 'HINDI', '2015', 'Pritam', 'V_92Ry6aKe0', 'Phantom'],
      ['Sirikkadhey', 'TAMIL', '2016', 'Anirudh', 'iiVANEoXeLY', 'Remo'],
      ['Udhungada Sangu', 'TAMIL', '2014', 'Anirudh Ravichander', 'RCXzH27eOIA', 'Velai Illa Pattadhaari'],
      ['Love Elephantla ', 'TELUGU', '2005', 'Harris Jayaraj', 'zkqJ41nQk9I', 'Aparichithudu'],
      ['Rude', 'ENGLISH', '2013', 'MAGIC!', 'aRtJqhe6YaY', 'Rude'],
      ['Chop Suey', 'ENGLISH', '2001', 'System Of A Down', 'clUkF4z6Q14', 'Toxicity'],
      ['Protectors of the Earth', 'ENGLISH', '2014', 'Two Steps from Hell', 'uEEyhDcSXko', 'Invincible'],
      ['Another Brick In The Wall', 'ENGLISH', '1979', 'Pink Floyd', 'NoK1JmTUzCI', 'The Wall'],
      ['Karuppi', 'TAMIL', '2018', 'Santhosh Narayanan', '5IXdCWhQG78', 'Pariyerum Perumal'],
      ['Maula Mere Maula', 'HINDI', '2007', 'Mithoon', 'ptdVuijIQQE', 'Anwar'],
      ['Soch Na Sake', 'HINDI', '2015', 'Amaal Mallik', 'IQ-IzgNhvhg', 'AIRLIFT'],
      ['Treat You Better', 'ENGLISH', '2016', 'Shawn Mendes', 'EvDz91ZmOD0', 'Illuminate'],
      ['Ice Cream Penne', 'TAMIL', '2016', 'Radhan', 'XrJtigZWtwM', 'Valeba Raja'],
      ['Try', 'ENGLISH', '2012', ' Pink', 'pPtlSF4TlJE', 'The Truth About Love'],
      ['Main Tera Boyfriend', 'HINDI', '2017', 'Meet Bros', 'hQqHFJdSq0M', 'Raabta'],
      ['Boochade Boochade', 'TELUGU', '2014', 'S. Thaman', 'P0dHPM0Gzzc', 'Race Gurram'],
      ['Tujhe Kitna Chahne', 'HINDI', '2019', 'Mithoon', 'ABsafzlQN9Q', 'Kabir Singh'],
      ['Beautiful', 'ENGLISH', '2009', 'Eminem', 'WDsWiUObdes', 'Relapse'],
      ['Dynamite', 'ENGLISH', '2009', 'Taio Cruz', 'Jq8rVrcbUXY', 'Rokstarr '],
      ['Ok Anesa', 'TELUGU', '2008', 'Mickey J. Meyer', '7saoh3n0fjY', 'Kothabangarulokam '],
      ['Seven nation army', 'ENGLISH', '2003', 'The White Stripes', 's2i82up9E1w', 'Elephant'],
      ['Tere Liye', 'HINDI', '2010', 'Sachin Gupta', 'AlvUuGJccKs', 'Prince'],
      ['Cheliya Cheliya', 'TELUGU', '2001', 'Mani Sharma', '_ruDPvH9_Eg', 'Kushi'],
      ['Beautiful ', 'ENGLISH', '2008', 'Akon', 'wePsgv7utPE', ' Beautiful (Reggae Remix)'],
      ['Oh Prema', 'TELUGU', '2001', 'Mani Sharma', 'x0X2ld8YZlM', 'Devi Putrudu'],
      ['Not Afraid', 'ENGLISH', '2010', ' Eminem', 'j5-yKhDd64s', 'Road to Recovery: Withdrawal'],
      ['Pehli Baar Mohabbat', 'HINDI', '2009', 'Vishal Bhardwaj', 'itc-rHSsDj4', 'Kaminey'],
      ['Roobaroo', 'HINDI', '2006', 'A. R. Rahman', 'BrfRB6aTZlM', 'Rang De Basanti'],
      ['En Jeevan', 'TAMIL', '2016', 'G.V.Prakash Kumar', 'H3GhtM8V-dU', 'Theri'],
      ['DOORIYAN', 'HINDI', '2009', 'Pritam', '-7z3YeFqd7xQ', 'Love Aaj Kal'],
      ['ROCK THA PARTY', 'HINDI', '2016', 'BOMBAY ROCKERS', 'areBR3RVBVc', 'ROCKY HANDSOME'],
      ['Perfect', 'ENGLISH', '2017', 'Ed Sheeran', 'iKzRIweSBLA', 'Divide'],
      ['2U', 'ENGLISH', '2017', 'Justin Bieber', '3QAOqZPJgZE', '2U'],
      ['Otha Sollaala', 'TAMIL', '2011', 'GV Prakash', 'FNLrzbv0Vdg', 'Aadukalam'],
      ['Lonely day', 'ENGLISH', '2005', 'System Of A Down', '9VBiJvJfC0Q', 'Hypnotize'],
      ['Idhedho Bagundhe', 'TELUGU', '2013', 'Devi Sri Prasad', 'QL-I0SSjZO0', 'Mirchi'],
      ['I want it that way', ' ENGLISH', '2007', ' Backstreet Boys', 'MwdSvchtKeA', 'Millennium'],
      ['Vachindamma', 'TELUGU', '2018', 'Gopi Sunder', 'kpWHXkkFmpc', 'Geetha Govindam'],
      ['Engeyum Kadhal', 'TAMIL', '2011', 'Harris Jayaraj ', 'Ue0EpN0q_Kc', 'Engeyum Kadhal'],
      ['Pillaa Raa', 'TELUGU', '2018', 'Chaitan Bharadwaj', 'ounfulDDQSc', 'RX 100'],
      ['Kohinoor', 'HINDI', '2019', 'Divine', 'FBYvyWvSY1M', 'Kohinoor'],
      ['Pareshaan', 'HINDI', '2012', 'Amit Trivedi', 'k5TRnHHQ57U', 'Ishaqzaade'],
      ['Ek Din Teri Raahon Mein', 'HINDI', '2007', 'Pritam', '4FC_WJjIsmk', 'Naqaab'],
      ['Sawan Aaya Hai', 'HINDI', '2014', 'Tony Kakkar', 'B5_6jfGsyjA', ' Creature 3D'],
      ['Faded', 'ENGLISH', '2015', 'Alan Walker', '60ItHLz5WEA', '-'],
      ['Oh Penne', 'TAMIL', '2013', 'Anirudh', 'C7MAqIcM-Sg', 'Vanakkam Chennai'],
      ['Ghar More Pardesiya', 'HINDI', '2019', 'Pritam', 'pp8vAFFc5E0', 'Kalank'],
      ['Kya Mujhe Pyar Hai', 'HINDI', '2006', 'Pritam', '0KIaQr4hqf8', 'Woh Lamhe'],
      ['Aahista Aahista', 'HINDI', '2008', 'Vishal-Shekhar', '-m9IGI5EgyM', 'Bachna Ae Haseeno'],
      ['Ilamai Thirumbudhe', 'TAMIL', '2019', 'Anirudh', '3QKgnA4uy30', 'Petta'],
      ['Wicked Ones', 'ENGLISH', '2014', 'Dorothy', 'kOngAfP_2OE', 'DOROTHY'],
      ['Kadavulae Vidai', 'TAMIL', '2017', 'Anirudh Ravichander', 'Hfh_dcVaN5o', 'Rum'],
      ['Soul Sister', 'ENGLISH', '2009', 'Train', 'JloUN9j9cJ8', 'Hey, Soul Sister: Remixes EP'],
      ['Orasaadha', 'TAMIL', '2018', 'Vivek–Mervin', '93Y_eCwdR5k', 'The Tamil EDM Mixtape'],
      ['Sarvam Thaala Mayam', 'TAMIL', '2019', 'A.R Rahman', 'd3OZVsHG9TM', 'Sarvam Thaala Mayam'],
      ['Whenever Wherever', 'ENGLISH', '2001', 'Shakira', 'cZhli2OT5Rg', 'Laundry Service'],
      ['Dilko Tumse Pyar Hua', 'HINDI', '2001', 'Harris Jayaraj ', 'ZiJgkQLunUM', 'Rehna Hai Tere Dil Mein'],
      ['Tung Tung Baje', 'HINDI', '2015', '\tSneha Khanwalkar', 'u2VhHGAtr4g', 'Singh Is Bliing'],
      ['Naan Nee', 'TAMIL', '2014', 'Santhosh Narayanan', 'VMYWqrlB7Gc', 'Madras'],
      ['Secret of Success ', 'TAMIL', '2003', 'AR RAHMAN', 'kjOrdWcybpg', 'Boys'],
      ['Singappenney', 'TAMIL', '2019', 'A.R Rahman', 'IiUNRYQ1Cak', 'Bigil'],
      ['Tere Bin', 'HINDI', '2007', 'Rabbi Shergill', '1IMzEh0dsxs', '-'],
      ['Malare', 'MALAYALAM', '2015', 'Rajesh Murugesan', '0G2VxhV_gXM', 'Premam'],
      ['Afterglow', 'ENGLISH', '2005', 'INXS', 'OnTelUJrDhc', 'Switch'],
      ["Don't You Worry Child", 'ENGLISH', '2012', 'Swedish House Mafia', '3mWbRB3Y4R8', 'Until Now'],
      ['Yamaha Nagari', 'TELUGU', '1998', 'Mani Sharma', 'AHUBXVpVZn8', 'Choodalani Undi'],
      ['One Last Breath', 'ENGLISH', '2001', 'Creed', 'BzamjXouX5w', 'Weathered'],
      ['Eenie Meenie', 'ENGLISH', '2009', 'Justin Bieber', 'prmmCg5bKxA', 'My Worlds'],
      ['Heera', 'HINDI', '2014', 'AR RAHMAN', 'xn1nhR5Ayx0', 'Highway'],
      ['S.T.A.Y.', 'ENGLISH', '2014', 'Hans Zimmer ', 'N4o0qnSeVQQ', 'Interstellar'],
      ['Priya Priyathama', 'TELUGU', '1991', 'Ilaiyaraaja', 'Dr9Dbef84HI', 'Killer'],
      ['Dil Diyan Gallan', 'HINDI', '2017', 'Vishal-Shekhar', 'mevO4I0f5lg', 'Tiger Zinda Hai'],
      ['Aalaporaan Thamizhan', 'TAMIL', '2017', 'A.R Rahman', '3XmrZaVVUpc', 'Mersal'],
      ['Whatever', 'ENGLISH', '1994', 'Oasis', 'cAa4BN_Uadc', 'Definitely Maybe'],
      ['Pookal Pookum', 'TAMIL', '2010', 'GV Prakash', 'meocisSQzkQ', 'Madrasapattinam'],
      ['Hall of fame', 'ENGLISH', '2012', 'The Script', 'ds6o9in_y-o', 'Hall of Fame'],
      ['Kaho Na Kaho', 'HINDI', '2002', 'Anu Malik', '8jKlI0OcspY', 'Murder'],
      ['O Bekhabar', 'HINDI', '2010', '\u200ePritam\u200e', 'yidaL9xDlk8', 'Action Replayy'],
      ['Wake Me up When September Ends', 'ENGLISH', '2004', 'Green Day', 'ulRXvH8VOl8', 'American Idiot'],
      ['Yele Yele', 'TELUGU', '2009', 'Mickey J. Meyer', 'KBRrbNpHcUw', 'Ganesh'],
      ['Emai Poyave', 'TELUGU', '2018', 'Vishal Chandrasekhar', 'QfF5ceRzrqI', 'Padi Padi Leche Manasu'],
      ['Have You Ever Seen The Rain', 'ENGLISH', '1970', 'Creedence Clearwater Revived', 'g4flAZEgtjs', 'Pendulum'],
      ['Sky full of stars', 'ENGLISH', '2014', 'Coldplay', 'ot_snHDVTUU', 'Ghost Stories'],
      ['Ik Vaari Aa', 'HINDI', '2017', 'Pritam', 'vL14wk2cj6U', 'Raabta'],
      ['Little Talks', 'ENGLISH', '2011', 'Of Monsters and Men', 'ghb6eDopW8I', 'My Head Is an Animal'],
      ['Black Sheep', 'ENGLISH', '2010', 'Metric', 'KifLmoUhbU8', ' Scott Pilgrim vs. the World'],
      ['Pacha Velugu', 'TELUGU', '2006', 'Harris Jayaraj ', 'Wwhx8ED8hUQ', 'Raghavan'],
      ['Nuvve Nuvve', 'TELUGU', '2015', 'S. S. Thaman', 'B-mW-XIYHGk', 'Kick 2'],
      ['June Pothe', 'TELUGU', '2007', 'Harris Jayaraj', 'lqTiBstdBLk', ' Neevalle Neevalle'],
      ['Love the way you lie', 'ENGLISH', '2010', 'Eminem', 'uelHwf8o7_U', 'Recovery'],
      ['Fix You', 'ENGLISH', '2005', 'Coldplay', 'SYmJ_YcC_Fg', 'X&Y'],
      ['Aakhon ke Sagar', 'HINDI', '2004', 'Fuzön', 'dxekUFhmFu4', ' Saagar'],
      ['Ennamo Pannura', 'TAMIL', '2016', 'Radhan', 'S4WxvkXbay0', 'Valeba Raja'],
      ['Ciciliya', 'TELUGU', '2017', 'Harris Jayaraj', 'H252kIKffGg', 'Spyder'],
      ['Mellaga Mellaga', 'TELUGU', '1995', 'Deva', '_C_3rZDdSAY', 'Asha Asha Asha'],
      ['So What', 'ENGLISH', '2008', ' Pink', 'GRwTi-uSiQg', 'Funhouse'],
      ['Itni Si Baat Hain', 'HINDI', '2019', 'Pritam', 'jhPtPGKdQ-w', ' Azhar'],
      ['Channa Mereya', 'HINDI', '2016', 'Pritam', 'bzSTpdcs-EI', 'Ae Dil Hai Mushkil'],
      ['Ela Ela Naalo', 'TELUGU', '2011', 'Yuvan Shankar Raja', 'RrsKhq9TGhE', 'Panjaa'],
      ['O Sathiya', 'HINDI', '2012', '\tChakri', 'WLizJz1Wi4Y', 'Billu'],
      ['Roja Kadale', 'TAMIL', '2015', 'Harris Jayaraj', '9hVjc3sUSjA', 'Anegan'],
      ['Yaanji', 'TAMIL', '2017', 'Anirudh Ravichander', 'bWK3EuroEk4', 'Vikram Vedha'],
      ['Rain Fight', 'TAMIL', '2018', 'Santhosh Narayanan', 'rc2ft794XNI', 'Kaala'],
      ['Baarish', 'HINDI', '2008', 'Tanishk Bagchi', 'BNfAf4To73c', 'Half Girlfriend'],
      ['Sonapareeya', 'TAMIL', '2013', 'AR Rahman', 'HdBxoARI7E8', 'Maryan'],
      ['Romeo Attam Pottal ', 'TAMIL', '1996', 'AR RAHMAN', 'mbVrnZt2Eu4', 'Mr Romeo'],
      ['Show me the meaning', 'ENGLISH', '1999', ' Backstreet Boys', '38httsOpl8g', 'Millennium'],
      ["DJ Got Us Fallin' In Love", 'ENGLISH', '2010', 'Usher', 'C-dvTjK_07c', 'Versus'],
      ['The Fighter', 'ENGLISH', '2011', 'Gym Class Heroes', 'bxV-OOIamyk', 'The Papercut Chronicles II'],
      ['Hairat', 'HINDI', '2010', 'Vishal-Shekhar', 'wqTQNs9sO6M', 'Anjaana Anjaani'],
      ['Khamoshiyan', 'HINDI', '2015', 'Mithoon', 'Mv3SZDP7QUo', ' Khamoshiyan'],
      ['Tujhe Bhula Diya', 'HINDI', '2010', 'Vishal-Shekhar', 'o-9VdyXZKsQ', 'Anjaana Anjaani'],
      ['Mental Madhilo', 'TAMIL', '2015', 'A. R. Rahman', 'mUekrcEu0Mc', 'OK Bangaram'],
      ['Tujh Mein Rab Dikhta Hai', 'HINDI', '2008', 'Salim-Sulaiman', 'Vq8lbcb0Lcw', 'Rab Ne Bana Di Jodi'],
      ['Apologize', 'ENGLISH', '2006', 'OneRepublic', '5ub14kkXKKc', ' Apologize'],
      ['Nothing Else Matters', 'ENGLISH', '1992', 'Metallica', 'tAGnKpE4NCI', 'Metallica'],
      ['Khudaya Khair', 'HINDI', '2009', 'Pritam', 'jq69R33z4hU', 'Billu'],
      ['Renegades', 'ENGLISH', '2015', 'X Ambassadors', '6tu4wWSbnIs', ' Renegades (Astrolith Remix)'],
      ['Dekhte Dekhte', 'HINDI', '2018', 'Rochak Kohli', 'jBQpGiubj0c', 'Batti Gul Meter Chalu'],
      ['Judaai', 'HINDI', '2011', 'Sachin-Jigar', '5Dnv-nIlwWo', 'Badlapur'],
      ['Somebody That I Used To Know', 'ENGLISH', '2012', 'Gotye', 'Q7DtJJSVPsk', 'Making Mirrors'],
      ['Going In Blind', 'ENGLISH', '2001', 'P.O.D', 'VH4YfGDild0', 'Greatest Hits: The Atlantic Years'],
      ['Dil toh bacha hai ji - remix', 'HINDI', '2010', 'Vishal Bhardwaj', '8AZBJRpuOsU', 'Ishqiya'],
      ['Bailando', 'ENGLISH', '2013', 'Enrique Iglesias', 'b8I-7Wk_Vbc', 'Bailando (Remixes)'],
      ['Idhazhin Oram', 'TAMIL', '2012', 'Anirudh Ravichander', 'lZORMUufA_Y', '3'],
      ['Teri Deewani', 'HINDI', '2016', 'Kailash Kher', 'F_F6yC87-ts', 'Best of Bollywood: Sufi'],
      ['Maahi - Rock With Me', 'HINDI', '2009', 'Shaarib-Toshi', 'xx9C4nMUWXg', 'Raaz 2'],
      ['María', 'SPANISH', '1995', 'Ricky Martin', 'vCEvCXuglqo', 'A Medio Vivir'],
      ['Yekommakakomma', 'TELUGU', '1999', 'Mani Sharma', '9eJgdZsUw8U', 'Seenu'],
      ['Closer', 'ENGLISH', '2016', 'The Chainsmokers', 'PT2_F-1esPk', '-'],
      ['Faded', 'ENGLISH', '2015', 'Alan Walker', 'qdpXxGPqW-Y', 'Faded'],
      ['Abhi Mujh Mein Kahin', 'HINDI', '2012', 'Ajay-Atul', 'oWKgpB2zpgw', 'Agneepath'],
      ['Remember The Name', 'ENGLISH', '2005', 'Fort Minor', 'IqB5L9_sfbQ', 'Petrified'],
      ['Suno Aisha', 'HINDI', '2010', 'Amit Trivedi', '49WSoibFQDo', 'Aisha'],
      ['The Monster', 'ENGLISH', '2010', 'Eminem', 'EHkozMIXZ8w', 'The Marshall Mathers LP 2'],
      ['Emaindo Gaani', 'TELUGU', '2009', 'Achu & Dharan', 'E00t7gYiccE', 'Neenu Meeku Thelusa'],
      ["C'est La Vie", 'FRENCH-ARABIC', '2013', 'Cheb Khaled', 'defnPu0Jz3Y', 'Cest La Vie (Remixes)'],
      ['Fa la la', 'ENGLISH', '2011', 'Justin Bieber', 'PyoiR7jQhkg', 'Under the Mistletoe'],
      ['KABHI JO BAADAL BARSE', 'HINDI', '2013', 'Shaarib–Toshi', 'qH1eRWlJpsY', 'Jackpot'],
      ['Kannanule', 'TELUGU', '1995', 'A. R. Rahman', '6ViLM0XW-3g', 'Bombay'],
      ['Aadha Ishq', 'HINDI', '2010', 'Salim–Sulaiman', 'AWjQgUDfZG0', 'Band Baaja Baaraat'],
      ['Eastside', 'ENGLISH', '2018', 'Benny Blanco', 'KFof8aaUvGY', 'Eastside'],
      ['DIL KYUN YEH MERA', 'HINDI', '2010', 'Rajesh Roshan', 'GlMExeJMAGs', 'Kites'],
      ['Hawayein', 'HINDI', '2017', 'Pritam', 'cYOB941gyXI', 'Jab Harry Met Sejal'],
      ['Nee Kannu Neeli Samudram', 'TELUGU', '2020', 'Devi Sri Prasad', 'mrqgz4_a4PU', 'Uppena'],
      ['Tum Mile', 'HINDI', 'a2009', 'Pritam', 'odVptmgIcD0', ' Tum Mile'],
      ['Tabaah Ho Gaye', 'HINDI', '2019', 'Pritam', '8qtn07bThnE', ' Kalank'],
      ['AAO MILO CHALO', 'HINDI', '2007', 'Pritam', 'U0JYkRqU6eY', 'Jab We Met'],
      ['Dil Kya Kare', 'HINDI', '2007', 'Shankar-Ehsaan-Loy', 'gZjnUcJy-Rw', 'SALAAM-E-ISHQ'],
      ['Kangal Irandal', 'TAMIL', '2008', 'James Vasanthan', '3qj7o283j1g', 'Subramaniapuram'],
      ['Yeh Aaina', 'HINDI', '2019', 'Amaal Mallik', 'UcOx6Bm3_4k', 'Kabir Singh'],
      ['MARJAANI', 'HINDI', '2009', 'Pritam', 'xYyV1ZXLVdA', 'Billu'],
      ['Victory', 'ENGLISH', '2000', 'Hans Zimmer ', 'OLTZbJMQiD4', 'Gladiator'],
      ['Chahoon Bhi Toh', 'HINDI', '2011', 'Harris Jayaraj', 'SIfEDWGVwLs', 'Force'],
      ['Tera Hone Laga Hoon', 'HINDI', '2009', 'Pritam', 'rTuxUAuJRyY', 'Ajab Prem Ki Ghazab Kahani'],
      ['All Of The Lights', 'ENGLISH', '2010', 'Kanye West', 'HAfFfqiYLp0', 'My Beautiful Dark Twisted Fantasy'],
      ['Dusk Till Dawn', 'ENGLISH', '2017', ' Zayn Malik', 'IgGylfWRI3I', 'Icarus Falls'],
      ['Edhuta Nilichindhi', 'TELUGU', '2008', 'Kamalakar', 'rXumims1q98', 'Vaana'],
      ['Pehli Nazar Mein', 'HINDI', '2008', 'Pritam', 'JBCx0QyP8VQ', ' Race'],
      ['Channa Mereya', 'HINDI', '2016', 'Pritam', 'bzSTpdcs-EI', 'Ae Dil Hai Mushkil'],
      ['All The Right Moves', 'ENGLISH', '2009', 'OneRepublic', 'qrOeGCJdZe4', 'Waking Up'],
      ['Teri Ore', 'HINDI', '2008', 'Pritam', '8-xCwwSY-cI', 'Singh Is Kinng'],
      ['Paarthen', 'TAMIL', '2017', 'Sean Roldan', 'DZOpwL6t3Lw', 'Power Paandi'],
      ['Everything I Need', 'ENGLISH', '2018', 'Skylar Grey', '9thM5gLs2tg', 'Aquaman'],
      ['Satyameva Jayathe', ' ENGLISH', '2011', ' SuperHeavy', 'RNrDGaDU7ug', 'SuperHeavy'],
      ['Naa Pranama', 'TELUGU', '2001', 'S.A.Raj Kumar', 'dqcC56cqyiY', 'Daddy'],
      ['Padi Padi Leche Manasu', 'TELUGU', '2018', 'Vishal Chandrasekhar', 'uNLX3CffxTE', 'Padi Padi Leche Manasu'],
      ['Humko Pyaar Hua', 'HINDI', '2011', 'Pritam', 'EB25MOJIHRQ', 'Ready'],
      ['Anjali Anjali ', 'TAMIL', '1994', 'AR RAHMAN', 'B_iuts4M5ZE', 'Duet'],
      ['Tu Jaane Na', 'HINDI', '2009', 'Pritam', 'P8PWN1OmZOA', 'Ajab Prem Ki Ghazab Kahani'],
      ['Chirugali Veechane', 'TELUGU', '2003', 'Ilaiyaraaja', '9gC9ysiI2vA', 'Siva Putrudu '],
      ['Love me like you do', 'ENGLISH', '2015', 'Ellie Goulding', '725WlG1idPc', 'DELIRIUM'],
      ['Bhaag DK Bose', 'HINDI', '2011', 'Ram Sampath', 'Vc1NR-cMchc', 'Delhi Belly'],
      ['Rockabye', 'ENGLISH', '20120167', 'Clean Bandit', '2VDdP7lYiiI', 'Rockabye (Autograf Remix)'],
      ['Gerua', 'HINDI', '2015', 'Pritam', 'pRCQEI4GGr8', 'Dilwale'],
      ['Gal Mitthi Mitthi', 'HINDI', '2010', ' Amit Trivedi', 'iKs0WgXjTKI', 'Aisha'],
      ['Adhento Gaani', 'TELUGU', '2019', 'Anirudh', '-fapo-nHzxw', 'Jersey'],
      ['Naan Un', 'TAMIL', '2016', 'A. R. Rahman', 'f_H2Cq9Xze0', '24'],
      ['Time', 'ENGLISH', '1973', 'Pink Floyd', '-EzURpTF5c8', 'The Dark Side of the Moon'],
      ['Whataya Want From Me', 'ENGLISH', '2009', 'Adam Lambert', 'Rd78eThTuNM', 'For Your Entertainment'],
      ['My Life Be Like', 'ENGLISH', '2002', 'Grits', '83mhHOytg4U', 'The Art of Translation'],
      ['Main Agar Kahoon', 'HINDI', '2007', 'Vishal-Shekhar', 'DAYszemgPxc', 'Om Shanti Om'],
      ['Trinity: titoli', 'ENGLISH', '1970', 'Annibale E I Cantori Moderni', 'IQPGNh_2vtw', 'Lo chiamavano Trinità'],
      ['Deivangal Ingae', 'TAMIL', '2015', 'Harris Jayaraj', 'K5yJ7eVMRUA', 'Anegan'],
      ['Neruppu Da', 'TAMIL', '2016', 'Santhosh Narayanan', 'LHaGDT6Pdbk', 'Kabali'],
      ['Zindagi ne Zindagi Bhar Gham Diye', 'HINDI', '2007', 'Mithoon', 'i-xRii7pL_o', 'The Train'],
      ['Aura Ammakuchella', 'TELUGU', '1992', 'M. M. Keeravani', 'gdxkviJ6IJY', 'Aapadbandhavudu'],
      ['Nammave Ammai ', 'TELUGU', '2004', 'Joshua Sridhar', '_-JdC_Gccco', 'Premisthe'],
      ['Naluguriki', 'TELUGU', '2002', 'Mani Sharma', 'xZ4bjreAXj0', 'Takkari Donga'],
      ['Let It Be', 'ENGLISH', '2009', 'The Beatles', 'QDYfEBY9NM4', 'Let It Be (Remastered 2009)'],
      ['Dildara', 'HINDI', '2011', 'Vishal-Shekhar', 'gQ5qVtoLMk4', 'Ra.One'],
      ['Sucker', 'ENGLISH', '2019', 'Jonas Brothers', 'Ty0WEJvlljs', 'Happiness Begins'],
      ['Party in the USA', 'ENGLISH', '2009', 'Miley Cyrus', 'BlHsvqzHvag', 'Party in the U.S.A.'],
      ['Doorie', 'HINDI', '2006', 'Atif Aslam', 'Jv2Z9KJgYjU', 'Doorie'],
      ['Peela Peela', 'TAMIL', '2018', 'Anirudh', 'oBiEYXDkJnc', 'Thaanaa Serndha Koottam'],
      ['Lose Yourself', 'ENGLISH', '2002', 'Eminem', 'ZjB-sz62tJ8', '8 Mile'],
      ['Dream on', 'ENGLISH', '1973', 'Aerosmith', '4Y0lAQomh9g', 'Aerosmith'],
      ['Katravai Patravai', 'TAMIL', '2018', 'Santhosh Narayanan', '2WG--2Z5uNo', 'Kaala'],
      ['Beera', 'HINDI', '2010', 'A.R Rahman', '9oN4ePKC0MQ', 'Raavan'],
      ['Oka Maru', 'TELUGU', '2005', 'Harris Jayaraj', 'UWOkoxNks4g', 'Ghajini'],
      ['Tera Ban Jaunga', 'HINDI', '2019', 'Akhil Sachdeva', '39BOqZO8xaM', 'Kabir Singh'],
      ['Zombie', 'ENGLISH', '1994', 'The Cranberries', 'bZFbX19Q-R8', 'No Need to Argue'],
      ['Silukku Marame ', 'TAMIL', '2008', 'D Imman ', 'jxrShUBmzM0', 'Paayum Puli'],
      ['Bole Chudiyan', 'HINDI', '2016', 'Jatin Lalit', 'k8Yn6c7k7Qw', 'Kabhi Khushi Kabhie Gham'],
      ['o sayonara', 'TELUGU', '2014', 'Devi Sri Prasad', 'W9hPmEM1SkE', 'nenokkadine'],
      ['Gravity Soundtrack ', 'ENGLISH', '2013 ', 'Steven Price', 'K3-YGVb6Tbw', 'Gravity'],
      ['Don’u Don’u Don’u', 'TAMIL', '2015', 'Anirudh', 'Y0eErsVNK-I', 'Maari'],
      ['The Dewarists : I Believe', 'HINDI', '2011', 'Agnee + Parikrama + Shilpa Rao', 'o9Nq2Ww80zE'],
      ['Cruise', 'ENGLISH', '2012', 'Florida Georgia Line', 'Ioo9HXTE0kQ', "Here's to the Good Times"],
      ['Am I Wrong', 'ENGLISH', '2013', 'Nico & Vinz', '3oUPGbRazaA', 'Am I Wrong'],
      ['Here without you', 'ENGLISH', '2002', '3 Doors Down', 'NxBl_q_NDas', 'Away from the Sun'],
      ['Aye Udi Udi Udi', 'HINDI', '2002', 'A. R. Rahman', '3BsFE3WD0kA', 'Saathiya'],
      ['AADAT', 'HINDI', '2007', 'JAL', 'wJJBUtzjfgg', 'AADAT'],
      ['Agar Tum Saath', 'HINDI', '2015', 'A. R. Rahman', 'sK7riqg2mr4', 'Tamasha'],
      ['Yaarumilla', 'TAMIL', '2014', 'A. R. Rahman', 'idZ-5amTsHA', 'Kaaviyathalaivan'],
      ['Nee Yedhalo Naku', 'TELUGU', '2010', 'Yuvan Shankar Raja', 'nZZ3U_ACUAc', 'awaara'],
      ['Shukran Allah', 'HINDI', '2009', 'Salim–Sulaiman', 'vbW_zqQVZE0', 'Kurbaan'],
      ['Oy..Oy..', 'TELUGU', '2009', 'Yuvan Shankar Raja', 'dGH-YczynDc', 'Oy'],
      ["I'm A Man", 'ENGLISH', '2007', 'Black Strobe', 'BWJuGYRW5_s', 'Burn Your Own Church'],
      ['Chandelier', 'ENGLISH', '2014', 'Sia', '8nWdqiB6VqU', 'Voices'],
      ['Kanave Kanave', 'TAMIL', '2013', 'Anirudh Ravichander', 'qD53-RZpTOc', 'David'],
      ['Soniya', 'TAMIL', '1997', 'AR RAHMAN', 'sHbiwr5Ue6Y', 'Ratchagan'],
      ['Vastha Nee Venuka', 'TELUGU', '2006', 'A. R. Rahman', 'D_4nLWISLu4', 'Naani'],
      ['MAIN HOON NA', 'HINDI', '2004', 'Anu Malik', 'MzhsLzOTZNA', 'MAIN HOON NA'],
      ['Tukur Tukur', 'HINDI', '2015', 'Pritam', 'hp0g6p2jjvo', 'Dilwale'],
      ['Stiches', 'ENGLISH', '2015', 'Shawn Mendes', 'M_yYWMOKjvE', 'Stitches (Seeb Remix)'],
      ['My Love', 'ENGLISH', '2000', 'Westlife', 'btUTQeto940', 'Coast to Coast'],
      ['Ullaallaa', 'TAMIL', '2019', 'Anirudh', 'UvQ9y4w8unE', 'Petta'],
      ['Yaen Ennai Pirindhaai', 'TAMIL', '2019', 'Radhan', 'psxr4XFNBeo', 'Adithya varma'],
      ['Nammavemo', 'TELUGU', '2008', 'Mani Sharma', 'H47mzxzTDuI', 'Parugu'],
      ['Incomplete', 'ENGLISH', '2005', ' Backstreet Boys', '38httsOpl8g', 'Never Gone'],
      ['Boro Boro', 'Persian', '2004', 'Arash', 'J1CJIevhUr8', 'Boro Boro'],
      ['Pedave Palikina', 'TELUGU', '2006', 'A. R. Rahman', 'qvTtvP5Neqg', 'Naani'],
      ['Telusa Telusa', 'TELUGU', '2016', 'S. Thaman', 'NUWmsA5z5yk', 'Sarrainodu'],
      ['Enna Solla', 'TAMIL', '2015', 'Anirudh Ravichander', '5iR5V9sHEtQ', 'Thanga Magan'],
      ['Cold Water (Diwali)', 'ENGLISH', '2016', 'Major Lazer', 'vIm218Mhn9A', ' Cold Water'],
      ["IT AIN'T ME ", 'ENGLISH', '2017', 'Selena Gomez and Kygo', 'VH4YfGDild0', 'Stargazing'],
      ['Chadhti Lehrein Laang Na Paye', 'HINDI', '2010', ' Amit Trivedi', '6RLRUNoTHRY', 'Udaan'],
      ['Numb', 'ENGLISH', '2003', 'Linkin Park', '8P0vKLHbtMg', 'Meteora'],
      ['Woh Lamhey', 'HINDI', '2007', 'JAL', 'cp2UQ0iE-MU', 'AADAT'],
      ['Summer Of ’69', 'ENGLISH', '1988', 'Bryan Adams', 'HtipPCt317Y', 'Reckless'],
      ['Undiporaadhey', 'TELUGU', '2018', 'Radhan', 'lewVFlngGCk', 'Hushaaru'],
      ['Guzaarish', 'HINDI', '2008', 'A. R. Rahman', 'clzuRgaV5dw', 'Ghajini'],
      ['Thuli Thuli', 'TAMIL', '2010', 'Yuvan Shankar Raja', 'rHweW6dRRYY', 'Paiya'],
      ['Maahi Ve', 'HINDI', '2014', 'A.R Rahman', 'S1aQhVUy_9g', ' Highway'],
      ['Pirates Of The Caribbean Main Theme', 'ENGLISH', '2003  ', 'Klaus Badelt, Hans Zimmer', 'K3pU67zxPOM', 'Pirates Of The Caribbean'],
      ['Adaraku', 'TELUGU', '2005', 'Mani Sharma', '1U6O5sSGnxo', 'Athadu'],
      ['Hymn For The Weekend', 'ENGLISH', '2015', 'Coldplay', 'YykjpeuMNEk', 'A Head Full of Dreams'],
      ['Kaatu Mooliyo', 'MALAYALAM', '2015', 'eShaan Rahman', 'vilA6jt5w6Y', 'Ohm Shanthi Oshaana'],
      ['Cheap Thrills', 'ENGLISH', '2016', 'Sia', 'nEIHHydwec8', 'This Is Acting'],
      ['No Time for Caution', 'ENGLISH', '2014', 'Hans Zimmer ', 'lj8Q7jZOBgg', 'Interstellar'],
      ['LABON KO', 'HINDI', '2007', 'Pritam', '12pMB_mCBOo', 'Bhool Bhulaiyaa'],
      ['Padana Teeyaga', 'TELUGU', '2002', 'Harris Jayaraj', 'rtvSNC_82Lk', 'Vaasu'],
      ['Chill Bro', 'TAMIL', '2020', 'Vivek–Mervin', 'pHxz8l1iWU4', 'Pattas'],
      ['Emitemitemito', 'TELUGU', '2017', 'Radhan', 'T6p9NmQm5zA', 'Arjun Reddy'],
      ['Ee Chota Nuvvunna', 'TELUGU', '2003', 'Ramana Gogula', '24Zim7gg484', 'Johnny'],
      ['Dil Ye Bekarar Kyun Hai', 'HINDI', '2012', 'Pritam', '5oKFcSeHTSU', ' Players'],
      ['Final Frontier', 'ENGLISH', '2014', 'Thomas Bergersen ', 'BAzCf0ascW8', 'Sun'],
      ['Purple Yellow Red & Blue', 'ENGLISH', '2013', 'Portugal. The Man', 'q5x_YoweEg8', 'Evil Friends'],
      ['Something Just Like This', 'ENGLISH', '2017', 'Coldplay-The Chainsmokers', 'FM7MFYoylVs', 'Something Just Like This'],
      ['Venpani Malare', 'TAMIL', '2017', 'Sean Roldan', '7KvLlA4g1so', '  Power Paandi'],
      ['Sahana', 'TAMIL', '2007', 'AR RAHMAN', 'lTPQ6i0cSZM', 'Sivaji: The Boss'],
      ['Wild Ones', 'ENGLISH', '2012', 'Flo Rida-Sia ', 'bpOR_HuHRNs', ' Wild Ones'],
      ['Ik Junoon (Paint It Red)', 'HINDI', '2011', 'Shankar–Ehsaan–Loy', 'cB1jxbgf-Qs', ' Zindagi Na Milegi Dobara'],
      ['Mazhai Kuruvi', 'TAMIL', '2019', 'A.R. Rahman', 'bt4-FwVe1Fk', 'Chekka Chivantha Vaanam'],
      ['Break Your Heart', 'ENGLISH', '2009', 'Taio Cruz', 'TYnyYJ-jHFI', 'Rokstarr '],
      ['Shape of you', 'ENGLISH', '2017', 'Ed Sheeran', 'VJ2rlci9PE0', 'Shape of You (Stormzy Remix)'],
      ['Po Indru Neeyaga', 'TAMIL', '2014', 'Anirudh Ravichander', 'ADJSD_oh5nU', 'Velai Illa Pattadhaari'],
      ['Adiga Adiga', 'TELUGU', '2017', 'Gopi Sundar', '7dZqS3JIQ1I', 'Ninnu Kori'],
      ['Viva La Vida', 'ENGLISH', '2008', 'Coldplay', 'dvgZkm1xWPE', 'Viva La Vida or Death and All His Friends'],
      ['Sun Saathiya', 'HINDI', '2015', 'Sachin - Jigar', '_NWaYjsz3qY', 'ABCD 2'],
      ['Luka Chuppi', 'HINDI', '2006', 'A. R. Rahman', '_ikZtcgAMxo', 'Rang De Basanti'],
      ['Jimikki Kammal', 'MALAYALAM', '2017', 'Shaan Rahman', 'IvkVJt4lhGA', 'Velipadinte Pusthakam'],
      ['Aha Allari', 'TELUGU', '2002', ' Devi Sri Prasad', '5sqMIH_F5ks', 'Kadgam'],
      ['Aye Amaayika', 'TELUGU', '2015', 'A. R. Rahman', 'gB0-MOcIiBU', 'OK Bangaram'],
      ['The Saltwater Room', 'ENGLISH', '2008', 'Adam Young', 'qMp3TIVYwwk', 'Maybe', 'I am Dreaming'],
      ['Ye Chilipi', 'TELUGU', '2004', 'Harris Jayaraj', '5dQHjDuK-0w', 'Gharshana'],
      ['Bin Tere', 'HINDI', '2010', 'Vishal-Shekhar', '5IX-nUxDtJI', 'I Hate Luv Storys'],
      ['Mental Manadhil Female', 'TAMIL', '2015', 'A. R. Rahman', 'Nx_OQUkjsHM', 'OK Kanmani '],
      ['Neevalle Neevalle', 'TELUGU', '2007', 'Harris Jayaraj', '5xUTQD5rUB0', ' Neevalle Neevalle'],
      ['Khoon Chala', 'TAMIL', '2006', 'AR RAHMAN', 'ezfrbmJuLBM', 'Rang De Basanti'],
      ['Kamariya', 'HINDI', '2018', 'Lijo George - Dj Chetas', 'nfrfUSuFlow', 'Mitron'],
      ['Azhagiye', 'TAMIL', '2017', 'AR Rahman', 'TFUBlO-zJGg', 'Kaatru Veliyidai'],
      ['Raise Your Glass', 'ENGLISH', '2010', ' Pink', 'XjVNlG5cZyQ', 'Greatest Hits... So Far!!'],
      ['Blank Space ', 'ENGLISH', '2014', 'Taylor Swift', 'WZ605-Hflqg', ' 1989'],
      ['Nammave Ammai ', 'TELUGU', '2002', 'Harris Jayaraj', '0X76GY-iKFU', 'Vaasu'],
      ['Jaane Kyun', 'HINDI', '2008', 'Vishal-Shekhar', '50XjXNsK0Dc', 'Dostana'],
      ['Sadi Gali', 'HINDI', '2011', ' Krsna Solo', 'w_HaezV0DqI', 'Tanu Weds Manu'],
      ['Khwaja Mere Khwaja', 'HINDI', '2008', 'A. R. Rahman', 'rf9_x9fT0rY', 'Jodha Akabar'],
      ['Chukkalo Chandrude', 'TELUGU', '2002', 'Mani Sharma', 'lI7Y8bYzpn4', 'Takkari Donga'],
      ['My Dil Goes Mmmm', 'HINDI', '2005', 'Vishal–Shekhar', 'Wk4z3rc84bc', 'Salaam Namaste'],
      ['One love', 'ENGLISH', '2002', 'Blue', 'Rc7cK0jjpL8', 'One love'],
      ['SAJDE', 'HINDI', '2010', 'Pritam', 'zfABYXP_NSA', 'KHATTA MEETHA'],
      ['Do you know', 'ENGLISH', '2007', 'Enrique Iglesias', 'dZ7bW8JVlco', 'Insomniac'],
      ['Forever young', 'ENGLISH', '2005', 'Youth Group', 'Nzdt9vBvSDE', 'The O.C.'],
      ['Nenani Neevani', 'TELUGU', '2008', 'Mickey J. Meyer', 'x6HDlIGRk10', 'Kothabangarulokam'],
      ['Raanjhanaa', 'HINDI', '2013', 'AR Rahman', 'OsTGp5n6w5E', 'Raanjhanaa'],
      ['Airplanes', 'ENGLISH', '2010', ' B.o.B', 'Yy2aIH4XYpg', 'B.o.B Presents: The Adventures of Bobby Ra'],
      ['Zaalima', 'HINDI', '2017', 'Ram Sampath', 'hhdSyBHuI88', 'Raees'],
      ['Udayinchina', 'TELUGU', '2002', 'Devi Sri Prasad', 'tNdlz0LmVTk', 'Kalusukovalani'],
      ['Nanne Nanne', 'TELUGU', '2004', 'Harris Jayaraj', 'NZ_zARhxsIM', 'Gharshana'],
      ['Rishte Naate', 'HINDI', '2009', 'Pritam', 'c504EGCwQlU', 'De Dana Dan'],
      ['Now We Are Free', 'ENGLISH', '2000', 'Hans Zimmer ', 'PvrDI6U0mE4', 'Gladiator'],
      ['Fa La La', 'ENGLISH', '2011', 'Justin Bieber ft. Boyz II Men', 'b_4rdHIMDfk', ' Cold Water'],
      ['Replay (Prequel)', 'ENGLISH', '2009', 'Iyaz', 'WXxV9g7lsFE', 'Replay'],
      ['Toh Phir Aao', 'HINDI', '2007', 'Pritam', '_NWaYjsz3qY', 'Awarapan'],
      ['21 Guns', 'ENGLISH', '2004', 'Green Day', 'w29aq_sgwxw', '21 Guns'],
      ['Em Jaruguthondi', 'TELUGU', '2009', 'Vijay Antony', 'trqbFC1oMDI', 'Mahatma'],
      ['Bulla Ki Jaana Main Kaun', 'HINDI', '2004', 'Rabbi Shergill', 'gbpdE8n_QWo', 'Rabbi'],
      ['Bailamos', 'HINDI', '1999', ' Enrique Iglesias', '5sye_VxmNZA', 'Cosas del Amor'],
      ['Allah Maaf Kare', 'HINDI', '2011', 'Pritam', 'BhtHOzkQRpI', 'Desi Boyz'],
      ['Aankhon mein teri', 'HINDI', '2007', 'Vishal-Shekhar', 'bdS6OoH1W2A', 'Om Shanti Om'],
      ['O Humdum Suniyo Re', 'TELUGU', '2016', 'A R Rahman', '_9geEbZIAJM', 'Saathiya'],
      ['Samajavaragamana', 'TELUGU', '2019', 'S. Thaman', 'peLhDdjKUWU', 'Ala Vaikunthapurramloo'],
      ['Yun Hi Chala Chal', 'HINDI', '2004', 'A. R. Rahman', 'eEeX2QMlSlo', 'Swades'],
      ['Vaale Vaale', 'TELUGU', '2002', 'Harris Jayaraj', 'g9-S8-8Artk', 'Vaasu'],
      ['Nachave Nizam Pori ', 'TELUGU', '2004', 'Devi Sri Prasad', 'xR85zCreXUo', 'Varsham'],
      ['Nenjukkule', 'TAMIL', '2013', 'A.R Rahman', 'XYZwp-WAg6I', 'Kadal'],
      ['Chak De', 'HINDI', '2007', 'Salim–Sulaiman', 'OQVU_cJdxxU', 'Chak De India'],
      ['Lighters', 'ENGLISH', '2011', 'Bad Meets Evil', 'qJHiMGomJ_A', 'Hell: The Sequel'],
      ['O Saathi', 'HINDI', '2018', 'Arko', 'YuXLN23ZGQo', 'Baaghi 2'],
      ['Everybody Wants To Rule The World', 'ENGLISH', '1985', 'Tears for Fears', 'awoFZaSuko4', 'Songs from the Big Chair'],
      ['Jadu Hai Nasha Hai', 'HINDI', '2003', 'M. M. Keeravani', 'Iwa0Z9roM7g', 'Jism'],
      ['Feel my love', 'TELUGU', '2004', 'Devi Sri Prasad', 'vAqNDOeBGZk', 'Arya'],
      ['Mental Manadhil', 'TAMIL', '2015', 'A. R. Rahman', 'Wp05ZCG3yMk', 'OK Kanmani'],
      ['Pedave Palikina', 'TELUGU', '2004', 'A. R. Rahman', 'qvTtvP5Neqg', 'Naani'],
      ['All Rise', 'ENGLISH', '2001', 'Blue', 'tvIn3xTNO9Y', 'All Rise'],
      ['Subha Hone Na De', 'HINDI', '2011', 'Pritam', '_wMsvhz8YSk', 'Desi Boyz'],
      ['Swapnavevedo', 'TELUGU', '1999', 'Mani Sharma', 'SU38X4FBAhI', 'Ravoyi Chandamama'],
      ['Chiguraku Chatu', 'TELUGU', '2004', 'Mani Sharma', 'Q0cugVv3K2Y', 'Gudumba Shankar'],
      ['Inconsolable', 'ENGLISH', '2007', 'Backstreet Boys', 'c3955-vJ5Nw', 'Unbreakable'],
      ['Tum Se Hi', 'HINDI', '2007', 'Pritam', 'Cb6wuzOurPc', ' Jab We Met'],
      ['Youth Of The Nation', 'ENGLISH', '2001', 'P.O.D', '1wNjBR_jZ9M', 'Satellite'],
      ['Danza Kuduro', 'Portuguese', '2010', 'Don Omar', 'YPlZ-nJewRE', 'Don Omar Presents: Meet the Orphans'],
      ['Starboy', 'ENGLISH', '2016', 'The Weeknd', 'dMMUH_ZpbB0', 'Starboy'],
      ['Saware', 'HINDI', '2015', 'Pritam', 'CsOsmgUmT9U', 'Phantom'],
      ['Whistle', 'ENGLISH', '2012', 'Flo Rida', 'mRaffkti2us', 'Whistle'],
      ['Right Now (Na Na Na)', 'ENGLISH', '2008', 'Akon', 'If5KeoEDGoo', 'Right Now (Na Na Na)'],
      ['Moongil Thottam', 'TAMIL', '2013', 'A.R Rahman', 'IOA4-EIhtLA', 'Kadal'],
      ['Prema Prema', 'TELUGU', '1996', 'A R Rahman', 'Jo-Wb7gpQOY', 'Prema Desam'],
      ['MAR JAWAAN', 'HINDI', '2008', 'Salim–Sulaiman', 'SJPo9PRSI2E', 'Fashion'],
      ['Maate vinadhu ga', 'TELUGU', '2018', 'Jakes Bejoy', 'KMocA8G_puU', 'Taxiwaala'],
      ['Hey Ya!', 'HINDI', '2010', 'Shankar-Ehsaan-Loy', 'wLH4rrmIT60', 'Karthik Calling Karthik'],
      ['Enduko Madi', 'TELUGU', '2009', 'Achu & Dharan', '9sdzCtElP-8', 'Neenu Meeku Thelusa'],
      ['Kanulu Therichina', 'TELUGU', '2001', 'Devi Sri Prasad', 'BXkdXtwFd_0', 'Aanandham'],
      ['Kun Faya Kun', 'HINDI', '2011', 'A.R Rahman', '0RDI9CMilhk', ' Rockstar'],
      ['Falcon Eye', 'ENGLISH', '2017', 'Off Bloom', 'VASKfvfTePI', 'Falcon Eye'],
      ['O Re Piya', 'HINDI', '2007', 'Salim–Sulaiman', 'JyvX1LkNXz8', 'Aaja Nachle'],
      ['Tu Hi Meri Shab Hai', 'HINDI', '2006', 'Pritam', 'WdD0ai9cloI', 'Gangster'],
      ['Evare Nuvvu', 'TELUGU', '2007', 'Yuvan Shankar Raja', 'CcPXolTwGoI', 'Raju Bhai'],
      ['Thalli Pogathey', 'TAMIL', '2016', 'A. R. Rahman', 'IarsrX60bZw', 'Achcham Yenbadhu Madamaiyada'],
      ['Mustafa Mustafa', 'TELUGU', '1996', 'A R Rahman', 'iB8g5cB8am8', 'Prema Desam'],
      ['All Along The Watchtower', 'ENGLISH', '1968', 'The Jimi Hendrix Experience, Curtis Knight & Jimi Hendrix', 'PWSMeK28x3E', 'Electric Ladyland'],
      ['Alladhe Siragiye', 'TAMIL', '2016', 'Anirudh', 'qLghPlhluGI', 'Rum'],
      ['Magic', 'ENGLISH', '2014', 'Coldplay', '1PvBc2TOpE4', 'A Head Full of Dreams '],
      ['Memories', 'ENGLISH', '2019', 'Maroon 5', 'o2DXt11SMNI', 'Memories'],
      ['Iris', 'ENGLISH', '1998', 'Goo Goo Dolls', 'CUbJQGqFoi0', 'City of Angels: Music from the Motion Picture'],
      ["It Ain't Me", 'ENGLISH', '2017', 'Selena Gomez', 'u3VTKvdAuIY', 'Stargazing'],
      ["What I've done", 'ENGLISH', '2007', 'Linkin Park', '4v97gsFRMlE', "What I've Done"],
      ['Ey Hairathe', 'HINDI', '2007', 'A. R. Rahman', '038jmlSH3iM', 'Guru'],
      ['Chumma Kizhi', 'TAMIL', '2020', 'Anirudh Ravichander', 'FdVuB1G2G_g', 'Darbar'],
      ['Airplanes Pt II', 'ENGLISH', '2010', ' B.o.B', 'MK29MlRUt48', 'B.o.B Presents: The Adventures of Bobby Ray'],
      ['O Prema', 'TELUGU', '2002', 'Harris Jayaraj', 'Q1HHRvWksE8', 'Vaasu'],
      ['Whatever it takes', 'ENGLISH', '2017', 'Imagine Dragons', 'M66U_DuMCS8', 'Whatever It Takes (Miss Congeniality Remix)'],
      ['Prema Swaramulalo', 'TELUGU', '2016', 'A. R. Rahman', '3wXVjwDqYIw', '24'],
      ['Kailove Chedugudu', 'TELUGU', '2000', 'A. R. Rahman', '0rIXXuwnSFQ', 'Sakhi'],
      ['Chogada', 'HINDI', '2018', 'Lijo George - Dj Chetas', 'd4OGZZ0EsAI', 'Loveyatri'],
      ["I'm shipping up to Boston", 'ENGLISH', '2005', 'Dropkick Murphys', '1IIkaH2pY50', "The Warrior's Code"],
      ['En Kadhal Solla', 'TAMIL', '2010', 'Yuvan Shankar Raja', '61U0e-i4jSw', 'Paiya'],
      ['Hurt', 'ENGLISH', '2002', 'Johnny Cash', '8AHCfZTRGiI', 'American IV: The Man Comes Around'],
      ['Preminche Premava', 'TELUGU', '2006', 'A. R. Rahman', 'FR3Febey_lI', 'Sillunu Nuvvu Nenu Prema'],
      ['Tchê tcherere tchê tchê', 'Portuguese', '2011', 'Gusttavo Lima', 'Z1ZKaR-9Kt4', 'Balada'],
      ['Chiru Chiru Chinukai', 'TELUGU', '2010', 'Yuvan Shankar Raja', 'eVKLR0cM-FA', 'awaara'],
      ['Marudhaani', 'TAMIL', '2008', 'A. R. Rahman', 'fuiVf41YbLE', 'Sakkarakatti'],
      ['Ayyayo', 'TAMIL', '2011', 'G.V.Prakash Kumar', 'uxb-TMoqb9k', 'Aadukalam'],
      ['Kabhi Neem Neem', 'HINDI', '2004', 'A. R. Rahman', 'ALQ7MLtEwtI', 'Yuva'],
      ['Unnattundi Gundey', 'TELUGU', '2017', 'Gopi Sunder', 'BNI3-IVRtMM', 'Ninnu Kori'],
      ['Cold Water', 'ENGLISH', '2016', 'Major Lazer - Justin Bieber ', 'a59gmGkq_pw', ' Cold Water'],
      ['Manassa', 'TELUGU', '2007', 'Harris Jayaraj', 'kZL_70CLyrg', 'Munna'],
      ['Just a dream', 'ENGLISH', '2010', 'Nelly', '64ObKHp33i4', '5.0'],
      ['Galliyan', 'HINDI', '2014', 'Ankit Tiwari', 'PL8X5gq9ZlQ', ' Ek Villain'],
      ['O Sona', 'TELUGU', '1999', 'Deva', '5X-NctqvcBU', 'Vaali'],
      ['Stereo Love', 'ENGLISH', '2009', 'Edward Maya - Vika Jigulina', 'sw5kcRjBkEY', 'Stereo Love'],
      ['Sportive Boys', 'TELUGU', '2002', 'Harris Jayaraj', 'C31FdwTtYfc', 'Vaasu'],
      ["Don't Fear The Reaper", 'ENGLISH', '1976', 'Blue Öyster Cult', 'RjMEzBMiTJ4', 'Agents of Fortune'],
      ['Let her go', 'ENGLISH', '2012', 'Passenger', 'fO8IN5W87ws', 'All the Little Lights'],
      ['Saibo', 'HINDI', '2011', 'Sachin-Jigar', 'GtNrQy90Ih4', 'Shor in the City'],
      ['Takkunu Takkunu', 'TAMIL', '2019', 'Hiphop Tamizha', '7pVoLXgQkok', 'Mr.Local'],
      ['Tareefan', 'HINDI', '2018', 'Qaran', 'RcbdKqBESz8', 'Veere Di Wedding'],
      ['Everybody talks', 'ENGLISH', '2012', 'Neon Trees', 'X5G9tIe84lE', 'Picture Show (Deluxe Edition)'],
      ['Preyasi Kaavu', 'TELUGU', '2005', 'Mahesh Shankar', 'IXvri75YEPM', 'Vennela'],
      ['Mental Manadhil Female', 'TELUGU', '2015', 'A. R. Rahman', 'jEuojck5M7U', 'OK Bangaram'],
      ['O My Friend', 'TELUGU', '2007', 'Mickey J. Meyer', 'nYVrSXmdKNk', 'Happy Days'],
      ['Stereo Hearts', 'ENGLISH', '2011', 'Gym Class Heroes', 'T3E9Wjbq44E', 'The Papercut Chronicles II'],
      ['Flight', ' ENGLISH', '2013', ' Hans Zimmer', 'w4OdIOGBW2Q', 'Man of Steel'],
      ['Keep you much Longer', 'ENGLISH', '2008', 'Akon', '2e6kYfGeCmg', 'Freedom'],
      ['Pookkale Satru', 'TAMIL', '2017', 'AR Rahman', 'OCsrcPizVjA', 'I'],
      ['See You Again', 'ENGLISH', '2010', 'Charlie Puth', 'RgKAFK5djSk', 'See You Again']
         ],
    'informations': {}
  }
}

export default playlists
