const playlists = {
  'one': {
    slug: 'my-uber-playlist',
    title: 'My Über Playlist!',
    songs: [
      ['Kohinoor', 'HINDI', '2019', 'Divine', 'FBYvyWvSY1M', 'Kohinoor'],

      ["Don't Fear The Reaper", 'ENGLISH', '1976', 'Blue Öyster Cult', 'RjMEzBMiTJ4', 'Agents of Fortune'],

      ['Iris', 'ENGLISH', '1998', 'Goo Goo Dolls', 'CUbJQGqFoi0', 'City of Angels: Music from the Motion Picture'],

      ['Tujhe Kitna Chahne', 'HINDI', '2019', 'Mithoon', 'ABsafzlQN9Q', 'Kabir Singh'],

      ['Whatever it takes', 'ENGLISH', '2017', 'Imagine Dragons', 'M66U_DuMCS8', 'Whatever It Takes (Miss Congeniality Remix)'],
      
      ['Eastside', 'ENGLISH', '2018', 'Benny Blanco', 'KFof8aaUvGY', 'Eastside'],

      ["Renegades", 'ENGLISH', '2015', 'X Ambassadors', '6tu4wWSbnIs', ' Renegades (Astrolith Remix)'],

      ["Treat You Better", 'ENGLISH', '2016', 'Shawn Mendes', 'EvDz91ZmOD0', 'Illuminate'],

      ["Hall of fame", 'ENGLISH', '2012', 'The Script', 'ds6o9in_y-o', 'Hall of Fame'],

      ["Whatever", 'ENGLISH', '1994', 'Oasis', 'cAa4BN_Uadc', 'Definitely Maybe'],

      ["Wicked Ones", 'ENGLISH', '2014', 'Dorothy', 'kOngAfP_2OE', 'DOROTHY'],

      ['Ullaallaa', 'TAMIL', '2019', 'Anirudh', 'UvQ9y4w8unE', 'Petta'],
      
      ['Dil Diyan Gallan', 'HINDI', '2017', 'Vishal-Shekhar', 'mevO4I0f5lg', 'Tiger Zinda Hai'],
      
      ['SAJDE', 'HINDI', '2010', 'Pritam', 'zfABYXP_NSA', 'KHATTA MEETHA'],

      ['Where Is My Mind?', 'ENGLISH', '1988', ' Pixies', 'N3oCS85HvpY', 'Surfer Rosa'],
      
      ['Takkunu Takkunu', 'TAMIL', '2019', 'Hiphop Tamizha', '7pVoLXgQkok', 'Mr.Local'] ,
      
      ['Chandelier', 'ENGLISH', '2014', 'Sia', '8nWdqiB6VqU', 'Voices'],
      
      ['ROCK THA PARTY', 'HINDI', '2016', 'BOMBAY ROCKERS', 'areBR3RVBVc', 'ROCKY HANDSOME'] ,
      
      ['Closer', 'ENGLISH', '2016', 'The Chainsmokers', 'PT2_F-1esPk', '-'],

      ['Tera Ban Jaunga', 'HINDI', '2019', 'Akhil Sachdeva', '39BOqZO8xaM', 'Kabir Singh'],

      ['Everything I Need', 'ENGLISH', '2018', 'Skylar Grey', '9thM5gLs2tg', 'Aquaman'],

      ['Perfect', 'ENGLISH', '2017', 'Ed Sheeran', 'iKzRIweSBLA', 'Divide'],

      ['Memories', 'ENGLISH', '2019', 'Maroon 5', 'o2DXt11SMNI', 'Memories'],

      ['Ghar More Pardesiya', 'HINDI', '2019', 'Pritam', 'uIrfVJuB4mE', 'Kalank'],

      ["Falcon Eye", 'ENGLISH', '2017', 'Off Bloom', 'VASKfvfTePI', 'Falcon Eye'],

      ['Channa Mereya', 'HINDI', '2016', 'Pritam', 'bzSTpdcs-EI', 'Ae Dil Hai Mushkil'],

      ['Emai Poyave','TELUGU','2018','Vishal Chandrasekhar','QfF5ceRzrqI','Padi Padi Leche Manasu'],

      ['Sucker', 'ENGLISH', '2019', 'Jonas Brothers', 'Ty0WEJvlljs', 'Happiness Begins'],

      ['AAO MILO CHALO', 'HINDI', '2007', 'Pritam', 'U0JYkRqU6eY', 'Jab We Met'],

      ['Ilamai Thirumbudhe', 'TAMIL', '2019', 'Anirudh', '3QKgnA4uy30', 'Petta'],
      
      ['Bailando', 'ENGLISH', '2013', 'Enrique Iglesias', 'b8I-7Wk_Vbc', 'Bailando (Remixes)'],
      
      ['Something Just Like This', 'ENGLISH', '2017', 'Coldplay-The Chainsmokers', 'FM7MFYoylVs', 'Something Just Like This'],

      ['Girls Like You', 'ENGLISH', '2018', 'Maroon 5', 'aJOTlE1K90k', 'Maroon 5'],

      ['Kamariya', 'HINDI', '2018', 'Lijo George - Dj Chetas', 'nfrfUSuFlow', 'Mitron'],      

      ['Starboy', 'ENGLISH', '2016', 'The Weeknd', 'dMMUH_ZpbB0', 'Starboy'],
      
      ['Dil Ye Bekarar Kyun Hai', 'HINDI', '2012', 'Pritam', '5oKFcSeHTSU', ' Players'],

      ['Try', 'ENGLISH', '2012', ' Pink', 'pPtlSF4TlJE', 'The Truth About Love'],

      ["It Ain't Me", 'ENGLISH', '2017', 'Selena Gomez', 'u3VTKvdAuIY', 'Stargazing'],

      ['Orasaadha', 'TAMIL', '2018', 'Vivek–Mervin', '93Y_eCwdR5k', 'The Tamil EDM Mixtape'],

      ['Baarish', 'HINDI', '2008', 'Tanishk Bagchi', 'BNfAf4To73c', 'Half Girlfriend'],
      
      ['Bulla Ki Jaana Main Kaun', 'HINDI', '2004', 'Rabbi Shergill', 'gbpdE8n_QWo', 'Rabbi'],

      ['Replay (Prequel)', 'ENGLISH', '2009', 'Iyaz', 'WXxV9g7lsFE', 'Replay'],
      
      ['Deivangal Ingae', 'TAMIL', '2015', 'Harris Jayaraj', 'K5yJ7eVMRUA', 'Anegan'],
      
      ['Despocito Remix', 'SPANGLISH', '2016', 'Luis Fonsi', 'whwe0KD_rGw', 'Vida'],

      ['Roja Kadale', 'TAMIL', '2015', 'Harris Jayaraj', '9hVjc3sUSjA', 'Anegan'],

      ['Sawan Aaya Hai', 'HINDI', '2014', 'Tony Kakkar', 'B5_6jfGsyjA', ' Creature 3D'],
      
      ['Cheerleader', 'ENGLISH', '2014', 'Omi', 'jGflUbPQfW8', 'Me 4 U'],
      
      ['Chumma Kizhi', 'TAMIL', '2020', 'Anirudh Ravichander', 'FdVuB1G2G_g', 'Darbar'],

      ['Tabaah Ho Gaye', 'HINDI', '2019', 'Pritam', '8qtn07bThnE', ' Kalank'],
      
      ['Preyasi Kaavu', 'TELUGU', '2005', 'Mahesh Shankar', 'IXvri75YEPM', 'Vennela'],
      
      ['Vachindamma', 'TELUGU', '2018', 'Gopi Sunder', 'kpWHXkkFmpc', 'Geetha Govindam'],
      
      ['Hey Ya!', 'HINDI', '2010', 'Shankar-Ehsaan-Loy', 'wLH4rrmIT60', 'Karthik Calling Karthik'],

      ['Telusa Telusa', 'TELUGU', '2016', 'S. Thaman', 'NUWmsA5z5yk', 'Sarrainodu'],

      ['Forever young', 'ENGLISH', '2005', 'Youth Group', 'Nzdt9vBvSDE', 'The O.C.'],

      ['O My Friend', 'TELUGU', '2007', 'Mickey J. Meyer', 'nYVrSXmdKNk', 'Happy Days'],

      ['Toh Phir Aao', 'HINDI', '2007', 'Pritam', '_NWaYjsz3qY', 'Awarapan'],
      
      ['Sarvam Thaala Mayam', 'TAMIL', '2019', 'A.R Rahman', 'd3OZVsHG9TM', 'Sarvam Thaala Mayam'],
      
      ['O Saathi', 'HINDI', '2018', 'Arko', 'YuXLN23ZGQo', 'Baaghi 2'],
      
      ['Dusk Till Dawn', 'ENGLISH', '2017', ' Zayn Malik', 'IgGylfWRI3I', 'Icarus Falls'],
      
      ['Chahoon Bhi Toh', 'HINDI', '2011', 'Harris Jayaraj', 'SIfEDWGVwLs', 'Force'],

      ['Tchê tcherere tchê tchê', 'Portuguese', '2011', 'Gusttavo Lima', 'Z1ZKaR-9Kt4', 'Balada'],

      ['Neruppu Da', 'TAMIL', '2016', 'Santhosh Narayanan', 'LHaGDT6Pdbk', 'Kabali'],

      ['Afghan Jalebi', 'HINDI', '2015', 'Pritam', 'V_92Ry6aKe0', 'Phantom'],

      ['Unnattundi Gundey', 'TELUGU', '2017', 'Gopi Sunder', 'BNI3-IVRtMM', 'Ninnu Kori'],

      ['Itni Si Baat Hain', 'HINDI', '2019', 'Pritam', 'jhPtPGKdQ-w', ' Azhar'],

      ['Peela Peela', 'TAMIL', '2018', 'Anirudh', 'oBiEYXDkJnc', 'Thaanaa Serndha Koottam'],

      ['Khoon Chala', 'TAMIL', '2006', 'AR RAHMAN', 'ezfrbmJuLBM', 'Rang De Basanti'] ,
      
      ['Unakkenna Venum Sollu', 'TAMIL', '2015', 'Harris Jayaraj', '2OFuWfpBS-s', 'Yennai Arindhaal'],
      
      ['Chogada', 'HINDI', '2018', 'Lijo George - Dj Chetas', 'd4OGZZ0EsAI', 'Loveyatri'],

      ['Dekhte Dekhte', 'HINDI', '2018', 'Rochak Kohli', 'jBQpGiubj0c', 'Batti Gul Meter Chalu'],

      ['2U', 'ENGLISH', '2017', 'Justin Bieber', '3QAOqZPJgZE', '2U'],

      ['Singappenney', 'TAMIL', '2019', 'A.R Rahman', 'IiUNRYQ1Cak', 'Bigil'],
      
      ['Tum Se Hi', 'HINDI', '2007', 'Pritam', 'Cb6wuzOurPc', ' Jab We Met'],
      
      ['Katravai Patravai', 'TAMIL', '2018', 'Santhosh Narayanan', '2WG--2Z5uNo', 'Kaala'],

      ['I want it that way', ' ENGLISH', '2007', ' Backstreet Boys', 'MwdSvchtKeA', 'Millennium'],

      ['Kadavulae Vidai', 'TAMIL', '2017', 'Anirudh Ravichander', 'Hfh_dcVaN5o', 'Rum'],

      ['Roobaroo', 'HINDI', '2006', 'A. R. Rahman', 'BrfRB6aTZlM', 'Rang De Basanti'],

      ['Yaarumilla', 'TAMIL', '2014', 'A. R. Rahman', 'idZ-5amTsHA', 'Kaaviyathalaivan'],
      
      ['Cold Water (Diwali)', 'ENGLISH', '2016', 'Major Lazer', 'vIm218Mhn9A', ' Cold Water'],

      ['Aankhon mein teri', 'HINDI', '2007', 'Vishal-Shekhar', 'bdS6OoH1W2A', 'Om Shanti Om'],

      ['My Life Be Like', 'ENGLISH', '2002', 'Grits', '83mhHOytg4U', 'The Art of Translation'],
      
      ['Khamoshiyan', 'HINDI', '2015', 'Mithoon', 'Mv3SZDP7QUo', ' Khamoshiyan'],

      ['Rude', 'ENGLISH', '2013', 'MAGIC!', 'aRtJqhe6YaY', 'Rude'],

      ['Banjaara', 'HINDI', '2014', 'Mithoon', 'HDnLm1197oc', ' Ek Villain'],

      ['Alladhe Siragiye', 'TAMIL', '2016', 'Anirudh', 'qLghPlhluGI', 'Rum'],
      
      ['Judaai','HINDI','2011','Sachin-Jigar','5Dnv-nIlwWo','Badlapur'],
      
      ["Fa la la", 'ENGLISH', '2011', 'Justin Bieber', 'PyoiR7jQhkg', 'Under the Mistletoe'],
      
      ['Rishte Naate', 'HINDI', '2009', 'Pritam', 'c504EGCwQlU', 'De Dana Dan'],
      
      ['Engeyum Kadhal', 'TAMIL', '2011', 'Harris Jayaraj ', 'Ue0EpN0q_Kc', 'Engeyum Kadhal'],
      
      ['Stiches', 'ENGLISH', '2015', 'Shawn Mendes', 'M_yYWMOKjvE', 'Stitches (Seeb Remix)'],
      
      ['Hawayein', 'HINDI', '2017', 'Pritam', 'cYOB941gyXI', 'Jab Harry Met Sejal'],
      
      ['Soch Na Sake', 'HINDI', '2015', 'Amaal Mallik', 'IQ-IzgNhvhg', 'AIRLIFT'],

      ['Inconsolable', 'ENGLISH', '2007', 'Backstreet Boys', 'c3955-vJ5Nw', 'Unbreakable'],

      ['Abhi Mujh Mein Kahin', 'HINDI', '2012', 'Ajay-Atul', 'oWKgpB2zpgw', 'Agneepath'],

      ['The Saltwater Room', 'ENGLISH', '2008', 'Adam Young', 'qMp3TIVYwwk', 'Maybe', 'I am Dreaming'],

      ['Moongil Thottam', 'TAMIL', '2013', 'A.R Rahman', 'IOA4-EIhtLA', 'Kadal'],

      ["I'm shipping up to Boston", 'ENGLISH', '2005', 'Dropkick Murphys', '1IIkaH2pY50', "The Warrior's Code"],

      ['Radha', 'HINDI', '2017', 'Pritam', 'loRj95fRX1c', 'Jab Harry Met Sejal'],
      
      ['Demons', 'ENGLISH', '2012', 'Imagine Dragons', 'mWRsgZuwf_8', 'Continued Silence EP'],

      ["Somebody That I Used To Know", 'ENGLISH', '2012', 'Gotye', 'Q7DtJJSVPsk', 'Making Mirrors'],
      
      ['Aalaporaan Thamizhan', 'TAMIL', '2017', 'A.R Rahman', '3XmrZaVVUpc', 'Mersal'],

      ["Holiday", 'ENGLISH', '2004', 'Green Day', 'sO-S32xnXA0', 'American Idiot'],
      
      ["Black Sheep", 'ENGLISH', '2010', 'Metric', 'KifLmoUhbU8', ' Scott Pilgrim vs. the World'],
      
      

      

      ['All Of The Lights', 'ENGLISH', '2010', 'Kanye West', 'HAfFfqiYLp0', 'My Beautiful Dark Twisted Fantasy'],
      ['Malare', 'MALAYALAM', '2015', 'Rajesh Murugesan', '0G2VxhV_gXM', 'Premam'],
      ['Adiga Adiga', 'TELUGU', '2017', 'Gopi Sundar', '7dZqS3JIQ1I', 'Ninnu Kori'],
      ['Kaatu Mooliyo', 'MALAYALAM', '2015', 'eShaan Rahman', 'vilA6jt5w6Y', 'Ohm Shanthi Oshaana'],
      ['Remember The Name', 'ENGLISH', '2005', 'Fort Minor', 'IqB5L9_sfbQ', 'Petrified'],
      ['O Re Piya', 'HINDI', '2007', 'Salim–Sulaiman', 'JyvX1LkNXz8', 'Aaja Nachle'],
      ['Enna Solla', 'TAMIL', '2015', 'Anirudh Ravichander', '5iR5V9sHEtQ', 'Thanga Magan'],


      ['Venpani Malare', 'TAMIL', '2017', 'Sean Roldan', '7KvLlA4g1so', '  Power Paandi'],
      ['The Monster', 'ENGLISH', '2010', 'Eminem', 'EHkozMIXZ8w', 'The Marshall Mathers LP 2'],
      ['Tareefan', 'HINDI', '2018', 'Qaran', 'RcbdKqBESz8', 'Veere Di Wedding'],
      ['A New Day Has Come', ' ENGLISH', '2000', ' Celine Dion', 'ZcEqCsDflY4', '2000 Collection'],
      ['Jimikki Kammal', 'MALAYALAM', '2017', 'Shaan Rahman', 'IvkVJt4lhGA', 'Velipadinte Pusthakam'],
      ['Tung Tung Baje', 'HINDI', '2015', '	Sneha Khanwalkar', 'u2VhHGAtr4g', 'Singh Is Bliing'],
      ["Icky thump", 'ENGLISH', '2007', 'The White Stripes', 'm1KyC_LzvzQ', 'Icky Thump'],

      ['Teri Ore', 'HINDI', '2008', 'Pritam', '8-xCwwSY-cI', 'Singh Is Kinng'],
      ['Love me like you do', 'ENGLISH', '2015', 'Ellie Goulding', '725WlG1idPc', 'DELIRIUM'],
      ['Allah Maaf Kare', 'HINDI', '2011', 'Pritam', 'BhtHOzkQRpI', 'Desi Boyz'],
      ['Burn', 'ENGLISH', '2013', 'Ellie Goulding', 'J5f27dW_AS0', 'Halcyon Days'],

      ['Padi Padi Leche Manasu','TELUGU','2018','Vishal Chandrasekhar','uNLX3CffxTE','Padi Padi Leche Manasu'],
      ['Danza Kuduro', 'Portuguese', '2010', 'Don Omar', 'YPlZ-nJewRE', 'Don Omar Presents: Meet the Orphans'],
      ["One love", 'ENGLISH', '2002', 'Blue', 'Rc7cK0jjpL8', 'One love'],
      ['Paarthen', 'TAMIL', '2017', 'Sean Roldan', 'DZOpwL6t3Lw', '  Power Paandi'],
      ['Galliyan', 'HINDI', '2014', 'Ankit Tiwari', 'PL8X5gq9ZlQ', ' Ek Villain'],

      ['Sunn Raha Hai (Female) ', 'HINDI', '2013', 'Ankit Tiwari', '49Yo4_9zNQ8', ' Aashiqui 2'],
      ['Aye Amaayika', 'TELUGU', '2015', 'A. R. Rahman', 'gB0-MOcIiBU', 'OK Bangaram'],
      ['Khudaya Khair', 'HINDI', '2009', 'Pritam', 'jq69R33z4hU', 'Billu'],
      ['Maate vinadhu ga', 'TELUGU', '2018', 'Jakes Bejoy', 'KMocA8G_puU', 'Taxiwaala'],
      ['Gerua', 'HINDI', '2015', 'Pritam', 'pRCQEI4GGr8', 'Dilwale'],
      ['Am I Wrong', 'ENGLISH', '2013', 'Nico & Vinz', '3oUPGbRazaA', 'Am I Wrong'],
      ['Faded', 'ENGLISH', '2015', 'Alan Walker', 'qdpXxGPqW-Y', 'Faded'],
      ['Heera', 'HINDI', '2014', 'AR RAHMAN', 'xn1nhR5Ayx0', 'Highway'],
      ['Raanjhanaa', 'HINDI', '2013', 'AR Rahman', 'OsTGp5n6w5E', 'Raanjhanaa'],
      ['Dildara', 'HINDI', '2011', 'Vishal-Shekhar', 'gQ5qVtoLMk4', 'Ra.One'],
      ['Cruise', 'ENGLISH', '2012', 'Florida Georgia Line', 'Ioo9HXTE0kQ', "Here's to the Good Times"],
      ['Whistle', 'ENGLISH', '2012', 'Flo Rida', 'mRaffkti2us', 'Whistle'],
      ['María', 'SPANISH', '1995', 'Ricky Martin', 'vCEvCXuglqo', 'A Medio Vivir'],
      ['Apologize', 'ENGLISH', '2006', 'OneRepublic', '5ub14kkXKKc', ' Apologize'],
      ['Soul Sister', 'ENGLISH', '2009', 'Train', 'JloUN9j9cJ8', 'Hey, Soul Sister: Remixes EP'],
      ["Toxicity", 'ENGLISH', '2001', 'System Of A Down', '0ukNUCQRPkI', 'Toxicity'],
      ['Kanave Kanave', 'TAMIL', '2013', 'Anirudh Ravichander', 'qD53-RZpTOc', 'David'] ,
      ['Lighters', 'ENGLISH', '2011', 'Bad Meets Evil', 'qJHiMGomJ_A', 'Hell: The Sequel'],

      ['Tukur Tukur', 'HINDI', '2015', 'Pritam', 'hp0g6p2jjvo', 'Dilwale'],
      ['One Last Breath', 'ENGLISH', '2001', 'Creed', 'BzamjXouX5w', 'Weathered'],   
      ['Bhaag DK Bose', 'HINDI', '2011', 'Ram Sampath', 'Vc1NR-cMchc', 'Delhi Belly'],
      ['Maahi Ve', 'HINDI', '2014', 'A.R Rahman', 'S1aQhVUy_9g', ' Highway'],
      ['Sun Saathiya', 'HINDI', '2015', 'Sachin - Jigar', '_NWaYjsz3qY', 'ABCD 2'],


      


      ['Maate Vinadhuga', 'TELUGU', '2018', 'Jakes Bejoy', 'KMocA8G_puU','Taxiwaala'],
      ['Don’u Don’u Don’u', 'TAMIL', '2015', 'Anirudh', 'Y0eErsVNK-I', 'Maari'],
      ['Naan Nee', 'TAMIL', '2014', 'Santhosh Narayanan', 'VMYWqrlB7Gc', 'Madras'],
      ["Seven nation army", 'ENGLISH', '2003', 'The White Stripes', 's2i82up9E1w', 'Elephant'],

      
      ['Nachave Nizam Pori ', 'TELUGU', '2004', 'Devi Sri Prasad', 'xR85zCreXUo', 'Varsham'],
      ['Beera', 'HINDI', '2010', 'A.R Rahman', '9oN4ePKC0MQ', 'Raavan'],
      ['See You Again', 'ENGLISH', '2010', 'Charlie Puth', 'RgKAFK5djSk', 'See You Again'],


      ['Nenjukkule', 'TAMIL', '2013', 'A.R Rahman', 'XYZwp-WAg6I', 'Kadal'],
      ['Main Agar Kahoon', 'HINDI', '2007', 'Vishal-Shekhar', 'DAYszemgPxc', 'Om Shanti Om'],
      ['My Love', 'ENGLISH', '2000', 'Westlife', 'btUTQeto940', 'Coast to Coast'],
      ['Yaanji', 'TAMIL', '2017', 'Anirudh Ravichander', 'bWK3EuroEk4', 'Vikram Vedha'] ,
      ['Happier', 'ENGLISH', '2018', 'Marshmello', 'm7Bc3pLyij0', 'Happier'],
     
      ['Shape of you', 'ENGLISH', '2017', 'Ed Sheeran', 'VJ2rlci9PE0', 'Shape of You (Stormzy Remix)'],
      ['Kun Faya Kun', 'HINDI', '2011', 'A.R Rahman', '0RDI9CMilhk', ' Rockstar'],
    

      ['Mirrors', 'ENGLISH', '2013', 'Justin Timberlake', '_1y7F0ZzXYo', 'The 20/20 Experience'],
      ['Boochade Boochade', 'TELUGU', '2014', 'S. Thaman', 'P0dHPM0Gzzc', 'Race Gurram'],
      ['Party in the USA', 'ENGLISH', '2009', 'Miley Cyrus', 'BlHsvqzHvag', 'Party in the U.S.A.'],
     
      ['The Fighter', 'ENGLISH', '2011', 'Gym Class Heroes', 'bxV-OOIamyk', 'The Papercut Chronicles II'],
      ['Love the way you lie', 'ENGLISH', '2010', 'Eminem', 'uelHwf8o7_U', 'Recovery'],
      ['Ennamo Pannura', 'TAMIL', '2016', 'Radhan', 'S4WxvkXbay0', 'muddula koduku'],
      ['Let her go', 'ENGLISH', '2012', 'Passenger', 'fO8IN5W87ws', 'All the Little Lights'],
      ['Subha Hone Na De', 'HINDI', '2011', 'Pritam', '_wMsvhz8YSk', 'Desi Boyz'],
      ['Undiporaadhey', 'TELUGU', '2018', 'Radhan', 'lewVFlngGCk', 'Hushaaru'],
    
      ['Nothing Else Matters', 'ENGLISH', '1992', 'Metallica', 'tAGnKpE4NCI', 'Metallica'],
      ['Doorie', 'HINDI', '2006', 'Atif Aslam', 'Jv2Z9KJgYjU', 'Doorie'],
      ['Stereo Hearts', 'ENGLISH', '2011', 'Gym Class Heroes', 'T3E9Wjbq44E', 'The Papercut Chronicles II'],
      ['Dil Kya Kare', 'HINDI', '2007', 'Shankar-Ehsaan-Loy', 'gZjnUcJy-Rw', 'SALAAM-E-ISHQ'],
      ['Tere Bin', 'HINDI', '2007', 'Rabbi Shergill', '1IMzEh0dsxs', '-'],
     
      ['AADAT', 'HINDI', '2007', 'JAL', 'wJJBUtzjfgg', 'AADAT'],

      ['Show me the meaning', 'ENGLISH', '1999', ' Backstreet Boys', '38httsOpl8g', 'Millennium'],
      ['Eenie Meenie', 'ENGLISH', '2009', 'Justin Bieber', 'prmmCg5bKxA', 'My Worlds'],
      ['Fix You', 'ENGLISH', '2005', 'Coldplay', 'SYmJ_YcC_Fg', 'X&Y'],
     
      ['Aha Allari', 'TELUGU', '2002', ' Devi Sri Prasad', '5sqMIH_F5ks', 'Kadgam'],
      ["Livin' La Vida Loca", 'HINDI', '1999', 'Ricky Martin', 'p47fEXGabaY', 'Ricky Martin'],
      ['Khwaja Mere Khwaja', 'HINDI', '2008', 'A. R. Rahman', 'rf9_x9fT0rY', 'Jodha Akabar'],
      ['Not Afraid', 'ENGLISH', '2010', ' Eminem', 'j5-yKhDd64s', 'Road to Recovery: Withdrawal'],
      ['Sadda Haq', 'HINDI', '2011', 'A.R Rahman', 'p9DQINKZxWE', ' Rockstar'],
      ['Bailamos', 'HINDI', '1999', ' Enrique Iglesias', '5sye_VxmNZA', 'Cosas del Amor'],
      ['Airplanes', 'ENGLISH', '2010', ' B.o.B', 'Yy2aIH4XYpg', 'B.o.B Presents: The Adventures of Bobby Ra'],
      
      ['Ey Hairathe', 'HINDI', '2007', 'A. R. Rahman', '038jmlSH3iM', 'Guru'],
      ['Cheliya Cheliya', 'TELUGU', '2001', 'Mani Sharma', '_ruDPvH9_Eg', 'Kushi'],
      ['Kabhi Neem Neem', 'HINDI', '2004', 'A. R. Rahman', 'ALQ7MLtEwtI', 'Yuva'],
      ["When I'm Gone", 'ENGLISH', '2005', 'Eminem', '1wYNFfgrXTI', "When I'm Gone"],
     
      ['Emaindo Gaani', 'TELUGU', '2009', 'Achu & Dharan', 'E00t7gYiccE', 'Neenu Meeku Thelusa'],
      
      ['Break Your Heart', 'ENGLISH', '2009', 'Taio Cruz', 'TYnyYJ-jHFI', 'Rokstarr '],
      ['Dynamite', 'ENGLISH', '2009', 'Taio Cruz', 'XEh3zWQWuEk', 'Rokstarr '],
 
      ['Numb', 'ENGLISH', '2003', 'Linkin Park', '8P0vKLHbtMg', 'Meteora'],
      ['Enduko Madi', 'TELUGU', '2009', 'Achu & Dharan', '9sdzCtElP-8', 'Neenu Meeku Thelusa'],
      
      ['Little Talks', 'ENGLISH', '2011', 'Of Monsters and Men', 'ghb6eDopW8I', 'My Head Is an Animal'],

      ['Pookkal Pookkum', 'TAMIL', '2010', 'G.V.Prakash Kumar', '9Wg2rk5AVqQ', 'Madrasapattinam'],
      ['Nenani Neevani', 'TELUGU', '2008', 'Mickey J. Meyer', 'x6HDlIGRk10', 'Kothabangarulokam'],
      

      ['Airplanes Pt II', 'ENGLISH', '2010', ' B.o.B', 'MK29MlRUt48', 'B.o.B Presents: The Adventures of Bobby Ray'],
      ['Kannanule', 'TELUGU', '1995', 'A. R. Rahman', 'p-1gysnu4MM', 'Bombay'],
      ['Arey Arey', 'TELUGU', '2007', 'Mickey J. Meyer', 'ta8SNlHsEdk', 'Happy Days'],
      ["Chop suey", 'ENGLISH', '2001', 'System Of A Down', 'CtZ9j-UYI1w', 'Toxicity'],

      ['Mazhai Kuruvi', 'TAMIL', '2019', 'A.R. Rahman', 'bt4-FwVe1Fk', 'Chekka Chivantha Vaanam'],
      ['The Dewarists : I Believe', 'HINDI', '2011', 'Agnee + Parikrama + Shilpa Rao', 'o9Nq2Ww80zE'],
      ['En Jeevan', 'TAMIL', '2016', 'G.V.Prakash Kumar', 'H3GhtM8V-dU', 'Theri'],

      ['Right Now (Na Na Na)', 'ENGLISH', '2008', 'Akon', 'If5KeoEDGoo', 'Right Now (Na Na Na)'],
      ['Woh Lamhey', 'HINDI', '2007', 'JAL', 'cp2UQ0iE-MU', 'AADAT'],

      ['Nee Yadalo Naaku', 'TELUGU', '2010', 'Yuvan Shankar Raja', 'VffosKXVZoY', 'Awaara'],
      ['Thalli Pogathey', 'TAMIL', '2016', 'A. R. Rahman', 'IarsrX60bZw', 'Achcham Yenbadhu Madamaiyada'],

      ['Do you know', 'ENGLISH', '2007', 'Enrique Iglesias', 'dZ7bW8JVlco', 'Insomniac'],
      ['Chiru Chiru', 'TELUGU', '2010', 'Yuvan Shankar Raja', 'hCt-H4-5wco', 'Awaara'],
      ['In The End', 'ENGLISH', '2002', 'Linkin Park', 'fv1pMNdsGWE', 'Reanimation'],
      ['Po Indru Neeyaga', 'TAMIL', '2014', 'Anirudh Ravichander', 'ADJSD_oh5nU', 'Velai Illa Pattadhaari'],

      ['Now We Are Free', ' ENGLISH', '2000', ' Hans Zimmer', 'PvrDI6U0mE4', 'Gladiator'],
      ['Incomplete', 'ENGLISH', '2007', ' Backstreet Boys', 'QszbpWMsI5M', 'Never Gone'],
      ['Tera Hone Laga Hoon', 'HINDI', '2009', 'Pritam', 'rTuxUAuJRyY', 'Ajab Prem Ki Ghazab Kahani'],

      ['Something That I Already Know', ' ENGLISH', '2007', ' Backstreet Boys', 'm291VyX5dTQ', 'Unbreakable'],
      ['Tu Jaane Na', 'HINDI', '2009', 'Pritam', 'P8PWN1OmZOA', 'Ajab Prem Ki Ghazab Kahani'],
      ['Pehli Nazar Mein', 'HINDI', '2008', 'Pritam', 'JBCx0QyP8VQ', ' Race'],
      ['Luka Chuppi', 'HINDI', '2006', 'A. R. Rahman', '_ikZtcgAMxo', 'Rang De Basanti'],

      ['Saibo', 'HINDI', '2011', 'Sachin-Jigar', 'GtNrQy90Ih4', 'Shor in the City'],
      ['Stairway To Heaven', ' ENGLISH', '1971', ' Led Zeppelin', 'QkF3oxziUI4', ' The Song Remains the Same'],
      ['Yekommakakomma', 'TELUGU', '1999', 'Mani Sharma', '9eJgdZsUw8U', 'Seenu'],
      ['Satyameva Jayathe', ' ENGLISH', '2011', ' SuperHeavy', 'RNrDGaDU7ug', 'SuperHeavy'],


      ['Good Riddance', ' ENGLISH', '1997', ' Green Day', 'Nwhyj0zcD7M', ' Nimrod'],
      ["What I've done", 'ENGLISH', '2007', 'Linkin Park', '4v97gsFRMlE', "What I've Done"],
      ['Idhazhin Oram', 'TAMIL', '2012', 'Anirudh Ravichander', 'lZORMUufA_Y', '3'],
      ['Beautiful ', 'ENGLISH', '2008', 'Akon', 'wePsgv7utPE', ' Beautiful (Reggae Remix)'],

      ['Tum Mile', 'HINDI', '2009', 'Pritam', 'odVptmgIcD0', ' Tum Mile'],
      ['Pedave Palikina', 'TELUGU', '2004', 'A. R. Rahman', 'qvTtvP5Neqg', 'Naani'],
      ['Afterglow', 'ENGLISH', '2005', 'INXS', 'OnTelUJrDhc', 'Switch'],
      ['Aakhon ke Sagar', 'HINDI', '2004', 'Fuzön', 'dxekUFhmFu4', ' Saagar'],
      ['Pillaa Raa', 'TELUGU', '2018', 'Chaitan Bharadwaj', 'ounfulDDQSc','RX 100'],

      ['Maula Mere Maula', 'HINDI', '2007', 'Mithoon', 'ptdVuijIQQE', 'Anwar'],
      ['Ye Chilipi', 'TELUGU', '2004', 'Harris Jayaraj', '5dQHjDuK-0w', 'Gharshana'],
      ['Keep you much Longer', 'ENGLISH', '2008', 'Akon', '2e6kYfGeCmg', 'Freedom'],
   
      ['Whenever Wherever', 'ENGLISH', '2001', 'Shakira', 'cZhli2OT5Rg', 'Laundry Service'],
      ['Newyork Nagaram', 'TAMIL', '2006', 'A. R. Rahman', '5WejuSV-sKU', 'Sillunu Oru Kaadhal'],
      ["Lonely day", 'ENGLISH', '2005', 'System Of A Down', '9VBiJvJfC0Q', 'Hypnotize'],

      ['Preminche Premava', 'TELUGU', '2006', 'A. R. Rahman', 'FR3Febey_lI', 'Sillunu Nuvvu Nenu Prema'],
      ['Tujh Mein Rab Dikhta Hai', 'HINDI', '2008', 'Salim-Sulaiman', 'Vq8lbcb0Lcw', 'Rab Ne Bana Di Jodi'],

      ['Sahana', 'TAMIL', '2007', 'AR RAHMAN', 'lTPQ6i0cSZM', 'Sivaji: The Boss'] ,
      ['Anjali Anjali ', 'TAMIL', '1994', 'AR RAHMAN', 'B_iuts4M5ZE', 'Duet'] ,
      ['Secret of Success ', 'TAMIL', '2003', 'AR RAHMAN', 'kjOrdWcybpg', 'Boys'] ,
      ["C'est La Vie", 'FRENCH-ARABIC', '2013', 'Cheb Khaled', 'defnPu0Jz3Y', 'Cest La Vie (Remixes)'],
      

      ['Edhuta Nilichindhi', 'TELUGU', '2008', 'Kamalakar', 'rXumims1q98', 'Vaana'],
      ['Nuvve Nuvve', 'TELUGU', '2015', 'S. S. Thaman', 'B-mW-XIYHGk', 'Kick 2'],
      ['Chirugali Veechane', 'TELUGU', '2003', 'Ilaiyaraaja', '9gC9ysiI2vA', 'Siva Putrudu '],
      ['Ayyayo', 'TAMIL', '2011', 'G.V.Prakash Kumar', 'uxb-TMoqb9k', 'Aadukalam'],

      ['Mellaga Mellaga', 'TELUGU', '1995', 'Deva', '_C_3rZDdSAY', 'Asha Asha Asha'],
      ['Kundanapu Bomma ', 'TELUGU', '2010', 'AR RAHMAN', 'sgSDt4YX9P8', 'Yemaaya Chesave'],

      ['Azhagiye', 'TAMIL', '2017', 'AR Rahman', 'TFUBlO-zJGg', 'Kaatru Veliyidai'],
      ['Andamaina Premarani', 'TELUGU', '1994', 'A. R. Rahman', 'kqXTFX4mNOg','Premikudu'],
      ['Innum Konjam Naeram', 'TAMIL', '2013', 'AR Rahman', 'jqCh3fSNog4', 'Maryan'],
      ["Sultans of Swing", 'ENGLISH', '1978', 'Dire straits', '89Qg_gYqkys', ' Sultans Of Swing / Eastbound Train'],
      ["Stereo Love", 'ENGLISH', '2009', 'Edward Maya', 'sw5kcRjBkEY', 'Love Story'],
      ["Going In Blind", 'ENGLISH', '2006', 'P.O.D', 'VH4YfGDild0', 'Greatest Hits: The Atlantic Years'],
      ['Pompeii', 'ENGLISH', '2013', 'Bastille', 'ChP_alpzsH8', 'Bad Blood'],
      ['Coming Home', 'ENGLISH', '2010', 'Dirty Money', 'k-ImCpNqbJw', 'Last Train to Paris'],
      ['Ik Vaari Aa', 'HINDI', '2017', 'Pritam', 'y4Ln-14NIBM', 'Raabta'],
      ['Falak Tak', 'HINDI', '2008', 'Vishal-Shekhar', 'qugEmqRQjEQ', 'Tashan'],
      ["All Rise", 'ENGLISH', '2001', 'Blue', 'tvIn3xTNO9Y', 'All Rise'],

      ["Youth Of The Nation", 'ENGLISH', '2001', 'P.O.D', '1wNjBR_jZ9M', 'Satellite'],
      ["Rockabye", 'ENGLISH', '20120167', 'Clean Bandit', '2VDdP7lYiiI', 'Rockabye (Autograf Remix)'],

      ['Otha Sollaala', 'TAMIL', '2011', 'GV Prakash', 'FNLrzbv0Vdg', 'Aadukalam'],
      ["Dream on", 'ENGLISH', '1973', 'Aerosmith', '4Y0lAQomh9g', 'Aerosmith'],


      ['Pookkale Satru', 'TAMIL', '2017', 'AR Rahman', 'OCsrcPizVjA', 'I'],
      ['Sonapareeya', 'TAMIL', '2013', 'AR Rahman', 'HdBxoARI7E8', 'Maryan'],
      ['Soniya', 'TAMIL', '1997', 'AR RAHMAN', 'sHbiwr5Ue6Y', 'Ratchagan'] ,
      ['Taal Taal Se Taal (Western)', 'HINDI', '1999', 'AR RAHMAN', 'MelMTp_dxNQ', 'Taal'] ,
      ['Ok Anesa', 'TELUGU', '2008', 'Mickey J. Meyer', '7saoh3n0fjY', 'Kothabangarulokam '],

      ['Romeo Attam Pottal ', 'TAMIL', '1996', 'AR RAHMAN', 'mbVrnZt2Eu4', 'Mr Romeo'] ,
     


      ['21 Guns', 'ENGLISH', '2004', 'Green Day', 'w29aq_sgwxw', '21 Guns'],

      ['Beautiful', 'ENGLISH', '2009', 'Eminem', 'WDsWiUObdes', 'Relapse'],	
  	
      ['Zaalima', 'HINDI', '2017', 'Ram Sampath', 'hhdSyBHuI88', 'Raees'],	
      ['Magic', 'ENGLISH', '2014', 'Coldplay', '1PvBc2TOpE4', 'A Head Full of Dreams '],
      ['Sky full of stars', 'ENGLISH', '2014', 'Coldplay', 'ot_snHDVTUU', 'Ghost Stories'],	
      ['Hymn For The Weekend', 'ENGLISH', '2015', 'Coldplay', 'YykjpeuMNEk', 'A Head Full of Dreams'],	
      ['Space Bound', 'ENGLISH', '2010', ' Eminem', 'JByDbPn6A1o', 'Recovery'],
      ["DJ Got Us Fallin' In Love", 'ENGLISH', '2010', 'Usher', 'C-dvTjK_07c', 'Versus'],
      ['Viva La Vida', 'ENGLISH', '2008', 'Coldplay', 'dvgZkm1xWPE', 'Viva La Vida or Death and All His Friends'],
      ['Wake Me up When September Ends', 'ENGLISH', '2004', 'Green Day', 'ulRXvH8VOl8', 'American Idiot'],

      ['Udhungada Sangu', 'TAMIL', '2014', 'Anirudh Ravichander', 'RCXzH27eOIA', 'Velai Illa Pattadhaari'],


      ['O Sona', 'TELUGU', '1999', 'Deva', '5X-NctqvcBU', 'Vaali'],
      ['Flight', ' ENGLISH', '2013', ' Hans Zimmer', 'w4OdIOGBW2Q', 'Man of Steel'],


      ['Here without you', 'ENGLISH', '2002', '3 Doors Down', 'NxBl_q_NDas', 'Away from the Sun'],
      ['Teri Deewani', 'HINDI', '2016', 'Kailash Kher', 'F_F6yC87-ts', 'Best of Bollywood: Sufi'],
      ['Cheap Thrills', 'ENGLISH', '2016', 'Sia', 'nEIHHydwec8', 'This Is Acting'],

      
      // ['Maga Dheera', 'TELUGU', '1999', 'A. R. Rahman', '7y2Ub1K925M', 'Oke Okkadu'] ,
      // ['Sarele Vooruko', 'TELUGU', '1996', 'Sri Kommineni', 'AHqGPlZ6wg0', 'Little Soldiers'] ,
      // ['Vennele Kuriseny Le', 'TELUGU', '2005', 'Vidyasagar', 'U1eF5SyidLE', 'muddula koduku'] ,
      // ['DOORIYAN', 'HINDI', '2009', 'Pritam', '7z3YeFqd7xQ', 'Love Aaj Kal'] ,
      // ['Mellaga', 'TELUGU', '2004', 'Devi Sri Prasad', 'SJKPRiVnpck', 'Varsham'] ,
      // ['Ee Manase Se', 'TELUGU', '1998', ' Deva', '0oEy0LOffrY', 'Tholiprema'] ,
      // ['Dil Ko Tumse', 'HINDI', '2001', ' Harris Jayaraj', 'Pb0COSer6vY', 'Rehnaa Hai Terre Dil Mein'] ,
      // ['Jashn-E-Bahaara', 'HINDI', '2008', 'A. R. Rahman', 'Mcn0iTUNqo0', 'Jodha Akabar'] ,
      // ['Kailove', 'TELUGU', '2000', 'A. R. Rahman', 'i_gGmIGnle0', 'Sakhi'] ,
      // ['Jee Karda (Rock Version)', 'HINDI', '2011', 'Sachin-Jigar', 'qoc3h1NMWuo', 'Badlapur'],
      // ['Jeena Jeena', 'HINDI', '2011', 'Sachin Jigar', 'bn4-yP92wcw', 'Badlapur'],
      
    ],
    'informations': {}
  }
}

export default playlists
