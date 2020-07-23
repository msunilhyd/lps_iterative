const playlists = {
  'one': {
    slug: 'my-uber-playlist',
    title: 'My Über Playlist!',
    songs: [

      ['Padana Teeyaga', 'TELUGU', '2002', 'Harris Jayaraj', 'rtvSNC_82Lk', 'Vaasu'] ,
      ['Feel my love', 'TELUGU', '2004', 'Devi Sri Prasad', 'vAqNDOeBGZk', 'Arya'] ,
      ['Aura Ammakuchella', 'TELUGU', '1992', 'M. M. Keeravani', 'gdxkviJ6IJY', 'Aapadbandhavudu'] ,
      ['Yaen Ennai Pirindhaai', 'TAMIL', '2019', 'Radhan', 'psxr4XFNBeo', 'Adithya varma'] ,
      ['Kaho Na Kaho', 'HINDI', '2004', 'Anu Malik', '3RAiYOyobZA', 'Murder'],
      ['Pookal Pookum', 'TAMIL', '2010', 'GV Prakash', 'meocisSQzkQ', 'Madrasapattinam'],
      ['Raise Your Glass', 'ENGLISH', '2010', ' Pink', 'XjVNlG5cZyQ', 'Greatest Hits... So Far!!'],
      ['So What', 'ENGLISH', '2008', ' Pink', 'GRwTi-uSiQg', 'Funhouse'],
      ["Time", 'ENGLISH', '1973', 'Pink Floyd', '-EzURpTF5c8', 'The Dark Side of the Moon'],
      ["Wish You Were Here", 'ENGLISH', '1975', 'Pink Floyd', 'RYhcfuiAdrA', 'Wish You Were Here'],
      ["Another Brick In The Wall", 'ENGLISH', '1979', 'Pink Floyd', 'NoK1JmTUzCI', 'The Wall'],
      ["Time Is On My Side", 'ENGLISH', '1964', 'The Rolling Stones', '_oSRvcdlgSI', '12 X 5'],
      ["Now We Are Free", 'ENGLISH', '2000', 'Hans Zimmer ', 'PvrDI6U0mE4', 'Gladiator'],
      ["Victory", 'ENGLISH', '2000', 'Hans Zimmer ', 'OLTZbJMQiD4', 'Gladiator'],
      ["S.T.A.Y.", 'ENGLISH', '2014', 'Hans Zimmer ', 'N4o0qnSeVQQ', 'Interstellar'],
      ["Protectors of the Earth", 'ENGLISH', '2014', 'Two Steps from Hell', 'uEEyhDcSXko', 'Invincible'],
      ["Gravity Soundtrack ", 'ENGLISH', '2013 ', 'Steven Price', 'K3-YGVb6Tbw', 'Gravity'],
      ["No Time for Caution", 'ENGLISH', '2014', 'Hans Zimmer ', 'lj8Q7jZOBgg', 'Interstellar'],
      ["Final Frontier", 'ENGLISH', '2014', 'Thomas Bergersen ', 'BAzCf0ascW8', 'Sun'],
      ["Pirates Of The Caribbean Main Theme", 'ENGLISH', '2003  ', 'Klaus Badelt, Hans Zimmer', 'K3pU67zxPOM', 'Pirates Of The Caribbean'],
      ["Promontory - The Last of the Mohicans", 'ENGLISH', '1992', 'Trevor Jones and Randy Edelman', '9tjdswqGGVg', 'The Last of the Mohicans'],
      ["Let It Be", 'ENGLISH', '2009', 'The Beatles', 'QDYfEBY9NM4', 'Let It Be (Remastered 2009)'],
      ["All Along The Watchtower", 'ENGLISH', '1968', 'The Jimi Hendrix Experience, Curtis Knight & Jimi Hendrix', 'PWSMeK28x3E', 'Electric Ladyland'],
      ["Hurt", 'ENGLISH', '2002', 'Johnny Cash', '8AHCfZTRGiI', 'American IV: The Man Comes Around'],
      ["Trinity: titoli", 'ENGLISH', '1970', 'Annibale E I Cantori Moderni', 'IQPGNh_2vtw', 'Lo chiamavano Trinità'],
      ["I'm A Man", 'ENGLISH', '2007', 'Black Strobe', 'BWJuGYRW5_s', 'Burn Your Own Church'],
      ['Yeh Aaina', 'HINDI', '2019', 'Amaal Mallik', 'UcOx6Bm3_4k', 'Kabir Singh'],
      ['Karuppi', 'TAMIL', '2018', 'Santhosh Narayanan', '5IXdCWhQG78', 'Pariyerum Perumal'],


      ['Dil Diyan Gallan', 'HINDI', '2017', 'Vishal-Shekhar', 'mevO4I0f5lg', 'Tiger Zinda Hai'],
      ['Where Is My Mind?', 'ENGLISH', '1988', ' Pixies', 'N3oCS85HvpY', 'Surfer Rosa'],
      ['Takkunu Takkunu', 'TAMIL', '2019', 'Hiphop Tamizha', '7pVoLXgQkok', 'Mr.Local'] ,
      ['Chandelier', 'ENGLISH', '2014', 'Sia', '8nWdqiB6VqU', 'Voices'],
      ['Closer', 'ENGLISH', '2016', 'The Chainsmokers', 'PT2_F-1esPk', '-'],
      ['Tera Ban Jaunga', 'HINDI', '2019', 'Akhil Sachdeva', '39BOqZO8xaM', 'Kabir Singh'],
      ['Everything I Need', 'ENGLISH', '2018', 'Skylar Grey', '9thM5gLs2tg', 'Aquaman'],
      ['Perfect', 'ENGLISH', '2017', 'Ed Sheeran', 'iKzRIweSBLA', 'Divide'],
      ['Neruppu Da', 'TAMIL', '2016', 'Santhosh Narayanan', 'LHaGDT6Pdbk', 'Kabali'],
      ['Ghar More Pardesiya', 'HINDI', '2019', 'Pritam', 'uIrfVJuB4mE', 'Kalank'],
      ['Channa Mereya', 'HINDI', '2016', 'Pritam', 'bzSTpdcs-EI', 'Ae Dil Hai Mushkil'],
      ['Emai Poyave','TELUGU','2018','Vishal Chandrasekhar','QfF5ceRzrqI','Padi Padi Leche Manasu'],
      ['AAO MILO CHALO', 'HINDI', '2007', 'Pritam', 'U0JYkRqU6eY', 'Jab We Met'],
      ['Dekhte Dekhte', 'HINDI', '2018', 'Rochak Kohli', 'jBQpGiubj0c', 'Batti Gul Meter Chalu'],
      ['Ilamai Thirumbudhe', 'TAMIL', '2019', 'Anirudh', '3QKgnA4uy30', 'Petta'],
      ['Kamariya', 'HINDI', '2018', 'Lijo George - Dj Chetas', 'nfrfUSuFlow', 'Mitron'],      
      ['Dil Ye Bekarar Kyun Hai', 'HINDI', '2012', 'Pritam', '5oKFcSeHTSU', ' Players'],
      ['Try', 'ENGLISH', '2012', ' Pink', 'pPtlSF4TlJE', 'The Truth About Love'],
      ['Cheerleader', 'ENGLISH', '2014', 'Omi', 'jGflUbPQfW8', 'Me 4 U'],
      ['Katravai Patravai', 'TAMIL', '2018', 'Santhosh Narayanan', '2WG--2Z5uNo', 'Kaala'],
      ['Hey Ya!', 'HINDI', '2010', 'Shankar-Ehsaan-Loy', 'wLH4rrmIT60', 'Karthik Calling Karthik'],
      ['Sarvam Thaala Mayam', 'TAMIL', '2019', 'A.R Rahman', 'd3OZVsHG9TM', 'Sarvam Thaala Mayam'],
      ['Galliyan', 'HINDI', '2014', 'Ankit Tiwari', 'PL8X5gq9ZlQ', ' Ek Villain'],
      ['O Saathi', 'HINDI', '2018', 'Arko', 'YuXLN23ZGQo', 'Baaghi 2'],
      ['Unnattundi Gundey', 'TELUGU', '2017', 'Gopi Sunder', 'BNI3-IVRtMM', 'Ninnu Kori'],
      ['Chumma Kizhi', 'TAMIL', '2020', 'Anirudh Ravichander', 'FdVuB1G2G_g', 'Darbar'],
      ['Tabaah Ho Gaye', 'HINDI', '2019', 'Pritam', '8qtn07bThnE', ' Kalank'],
      ['Preyasi Kaavu', 'TELUGU', '2005', 'Mahesh Shankar', 'IXvri75YEPM', 'Vennela'],
      ['Soch Na Sake', 'HINDI', '2015', 'Amaal Mallik', 'IQ-IzgNhvhg', 'AIRLIFT'],
      ['Inconsolable', 'ENGLISH', '2007', 'Backstreet Boys', 'c3955-vJ5Nw', 'Unbreakable'],
      ['Forever young', 'ENGLISH', '2005', 'Youth Group', 'Nzdt9vBvSDE', 'The O.C.'],
      ['Pehli Nazar Mein', 'HINDI', '2008', 'Pritam', 'JBCx0QyP8VQ', ' Race'],
      ['Orasaadha', 'TAMIL', '2018', 'Vivek–Mervin', '93Y_eCwdR5k', 'The Tamil EDM Mixtape'],
      ['Bulla Ki Jaana Main Kaun', 'HINDI', '2004', 'Rabbi Shergill', 'gbpdE8n_QWo', 'Rabbi'],
      ['Dusk Till Dawn', 'ENGLISH', '2017', ' Zayn Malik', 'IgGylfWRI3I', 'Icarus Falls'],
      ['Chahoon Bhi Toh', 'HINDI', '2011', 'Harris Jayaraj', 'SIfEDWGVwLs', 'Force'],
      ['Itni Si Baat Hain', 'HINDI', '2019', 'Pritam', 'jhPtPGKdQ-w', ' Azhar'],
      ['Peela Peela', 'TAMIL', '2018', 'Anirudh', 'oBiEYXDkJnc', 'Thaanaa Serndha Koottam'],
      ['Unakkenna Venum Sollu', 'TAMIL', '2015', 'Harris Jayaraj', '2OFuWfpBS-s', 'Yennai Arindhaal'],
      ['Chogada', 'HINDI', '2018', 'Lijo George - Dj Chetas', 'd4OGZZ0EsAI', 'Loveyatri'],
      ['2U', 'ENGLISH', '2017', 'Justin Bieber', '3QAOqZPJgZE', '2U'],
      ["I'm shipping up to Boston", 'ENGLISH', '2005', 'Dropkick Murphys', '1IIkaH2pY50', "The Warrior's Code"],
      ['Cold Water (Diwali)', 'ENGLISH', '2016', 'Major Lazer', 'vIm218Mhn9A', ' Cold Water'],
      ['Tum Se Hi', 'HINDI', '2007', 'Pritam', 'Cb6wuzOurPc', ' Jab We Met'],
      ['I want it that way', ' ENGLISH', '2007', ' Backstreet Boys', 'MwdSvchtKeA', 'Millennium'],
      ['Aadha Ishq', 'HINDI', '2010',  'Salim–Sulaiman', 'AWjQgUDfZG0','Band Baaja Baaraat'],
      ['Aankhon mein teri', 'HINDI', '2007', 'Vishal-Shekhar', 'bdS6OoH1W2A', 'Om Shanti Om'],
      ['My Life Be Like', 'ENGLISH', '2002', 'Grits', '83mhHOytg4U', 'The Art of Translation'],
      ['Banjaara', 'HINDI', '2014', 'Mithoon', 'HDnLm1197oc', ' Ek Villain'],
      ['Alladhe Siragiye', 'TAMIL', '2016', 'Anirudh', 'qLghPlhluGI', 'Rum'],      
      ['Here without you', 'ENGLISH', '2002', '3 Doors Down', 'NxBl_q_NDas', 'Away from the Sun'],
      ['Guzaarish', 'HINDI', '2008',  'A. R. Rahman', 'clzuRgaV5dw','Ghajini'],
      ['Marudhaani', 'TAMIL', '2008',  'A. R. Rahman', 'rQqyv7gaQOM','Sakkarakatti'],
      ['O Bekhabar', 'HINDI', '2010',  '‎Pritam‎', 'yidaL9xDlk8','Action Replayy'],
      ['Oh Penne', 'TAMIL', '2013', 'Anirudh', 'C7MAqIcM-Sg', 'Vanakkam Chennai'],
      ['The Dewarists : I Believe', 'HINDI', '2011', 'Agnee + Parikrama + Shilpa Rao', 'o9Nq2Ww80zE'],
      ['Zara si dil me de jagah tu', 'HINDI', '2008',  '‎Pritam‎', 'oiD-rVWEXjM','Jannat'],
      ['Maahi - Rock With Me', 'HINDI', '2009',  'Shaarib-Toshi', 'xx9C4nMUWXg','Raaz 2'],
      ['Judaai','HINDI','2011','Sachin-Jigar','5Dnv-nIlwWo','Badlapur'],
      ['Rishte Naate', 'HINDI', '2009', 'Pritam', 'c504EGCwQlU', 'De Dana Dan'],
      ['Stiches', 'ENGLISH', '2015', 'Shawn Mendes', 'M_yYWMOKjvE', 'Stitches (Seeb Remix)'],
      ['Pehli Baar Mohabbat', 'HINDI', '2009', 'Vishal Bhardwaj', 'itc-rHSsDj4', 'Kaminey'],
      ['Humko Pyaar Hua', 'HINDI', '2011',  '‎Pritam‎', 'EB25MOJIHRQ','Ready'],
      ['Tera Hua', 'HINDI', '2018', 'Tanishk Bagichi', '-4JV4hur1PM', 'Loveyatri'],
      ['Pareshaan', 'HINDI', '2012', '‎Amit Trivedi', 'k5TRnHHQ57U', 'Ishaqzaade'],
      ['Chill Bro', 'TAMIL', '2020', 'Vivek–Mervin', 'pHxz8l1iWU4', 'Pattas'],
      ["Have You Ever Seen The Rain", 'ENGLISH', '1970', 'Creedence Clearwater Revived', 'g4flAZEgtjs', 'Pendulum'],
      ['Ciciliya', 'TELUGU', '2017', 'Harris Jayaraj', 'H252kIKffGg', 'Spyder'] ,
      ["Summer Of ’69", 'ENGLISH', '1988', 'Bryan Adams', 'HtipPCt317Y', 'Reckless'],
      ["Zombie", 'ENGLISH', '1994', 'The Cranberries', 'bZFbX19Q-R8', 'No Need to Argue'],
      ['Ek Din Teri Raahon Mein', 'HINDI', '2007', '‎Pritam', '4FC_WJjIsmk', 'Naqaab'],
      ['Burn', 'ENGLISH', '2013', 'Ellie Goulding', 'J5f27dW_AS0', 'Halcyon Days'],
      ['Padi Padi Leche Manasu','TELUGU','2018','Vishal Chandrasekhar','uNLX3CffxTE','Padi Padi Leche Manasu'],
      ['Remember The Name', 'ENGLISH', '2005', 'Fort Minor', 'IqB5L9_sfbQ', 'Petrified'],
      ['O Re Piya', 'HINDI', '2007', 'Salim–Sulaiman', 'JyvX1LkNXz8', 'Aaja Nachle'],      
      ['A New Day Has Come', ' ENGLISH', '2000', ' Celine Dion', 'ZcEqCsDflY4', '2000 Collection'],
      ["Icky thump", 'ENGLISH', '2007', 'The White Stripes', 'm1KyC_LzvzQ', 'Icky Thump'],
      ['Sun Saathiya', 'HINDI', '2015', 'Sachin - Jigar', '_NWaYjsz3qY', 'ABCD 2'],
      ['Am I Wrong', 'ENGLISH', '2013', 'Nico & Vinz', '3oUPGbRazaA', 'Am I Wrong'],
      ['Heera', 'HINDI', '2014', 'AR RAHMAN', 'xn1nhR5Ayx0', 'Highway'],
      ['Raanjhanaa', 'HINDI', '2013', 'AR Rahman', 'OsTGp5n6w5E', 'Raanjhanaa'],
      ['Cruise', 'ENGLISH', '2012', 'Florida Georgia Line', 'Ioo9HXTE0kQ', "Here's to the Good Times"],
      ['Sunn Raha Hai (Female) ', 'HINDI', '2013', 'Ankit Tiwari', '49Yo4_9zNQ8', ' Aashiqui 2'],
      ['Khudaya Khair', 'HINDI', '2009', 'Pritam', 'jq69R33z4hU', 'Billu'],
      ['Whistle', 'ENGLISH', '2012', 'Flo Rida', 'mRaffkti2us', 'Whistle'],
      ['Apologize', 'ENGLISH', '2006', 'OneRepublic', '5ub14kkXKKc', ' Apologize'],
      ['Something That I Already Know', ' ENGLISH', '2007', ' Backstreet Boys', 'm291VyX5dTQ', 'Unbreakable'],
      ['Maahi Ve', 'HINDI', '2014', 'A.R Rahman', 'S1aQhVUy_9g', ' Highway'],
      ['Newyork Nagaram', 'TAMIL', '2006', 'A. R. Rahman', '5WejuSV-sKU', 'Sillunu Oru Kaadhal'],
      ["Lonely day", 'ENGLISH', '2005', 'System Of A Down', '9VBiJvJfC0Q', 'Hypnotize'],
      ['Preminche Premava', 'TELUGU', '2006', 'A. R. Rahman', 'FR3Febey_lI', 'Sillunu Nuvvu Nenu Prema'],
      ['Tujh Mein Rab Dikhta Hai', 'HINDI', '2008', 'Salim-Sulaiman', 'Vq8lbcb0Lcw', 'Rab Ne Bana Di Jodi'],
      ['Jaane Kyun', 'HINDI', '2008', 'Vishal-Shekhar', '50XjXNsK0Dc', 'Dostana'],
      ['Teri Deewani', 'HINDI', '2016', 'Kailash Kher', 'F_F6yC87-ts', 'Best of Bollywood: Sufi'],
      ['Venpani Malare', 'TAMIL', '2017', 'Sean Roldan', '7KvLlA4g1so', '  Power Paandi'],
      ['Emitemitemito', 'TELUGU', '2017', 'Radhan', 'T6p9NmQm5zA', 'Arjun Reddy'] ,
      ['Suno Aisha', 'HINDI', '2010', '‎Amit Trivedi', '49WSoibFQDo', 'Aisha'],
      ['All Of The Lights', 'ENGLISH', '2010', 'Kanye West', 'HAfFfqiYLp0', 'My Beautiful Dark Twisted Fantasy'],
      ['Kabhi Neem Neem', 'HINDI', '2004', 'A. R. Rahman', 'ALQ7MLtEwtI', 'Yuva'],
      ['Mirrors', 'ENGLISH', '2013', 'Justin Timberlake', '_1y7F0ZzXYo', 'The 20/20 Experience'],
      ['Kohinoor', 'HINDI', '2019', 'Divine', 'FBYvyWvSY1M', 'Kohinoor'],
      ["Don't Fear The Reaper", 'ENGLISH', '1976', 'Blue Öyster Cult', 'RjMEzBMiTJ4', 'Agents of Fortune'],
      ['Iris', 'ENGLISH', '1998', 'Goo Goo Dolls', 'CUbJQGqFoi0', 'City of Angels: Music from the Motion Picture'],
      ['Tujhe Kitna Chahne', 'HINDI', '2019', 'Mithoon', 'ABsafzlQN9Q', 'Kabir Singh'],
      ['Whatever it takes', 'ENGLISH', '2017', 'Imagine Dragons', 'M66U_DuMCS8', 'Whatever It Takes (Miss Congeniality Remix)'],
      ['Eastside', 'ENGLISH', '2018', 'Benny Blanco', 'KFof8aaUvGY', 'Eastside'],
      ["Renegades", 'ENGLISH', '2015', 'X Ambassadors', '6tu4wWSbnIs', ' Renegades (Astrolith Remix)'],
      ["Hall of fame", 'ENGLISH', '2012', 'The Script', 'ds6o9in_y-o', 'Hall of Fame'],
      ["Whatever", 'ENGLISH', '1994', 'Oasis', 'cAa4BN_Uadc', 'Definitely Maybe'],
      ['Something Just Like This', 'ENGLISH', '2017', 'Coldplay-The Chainsmokers', 'FM7MFYoylVs', 'Something Just Like This'],
     









      ['Vachindamma', 'TELUGU', '2018', 'Gopi Sunder', 'kpWHXkkFmpc', 'Geetha Govindam'],
      ['Telusa Telusa', 'TELUGU', '2016', 'S. Thaman', 'NUWmsA5z5yk', 'Sarrainodu'],
      ['Despocito Remix', 'SPANGLISH', '2016', 'Luis Fonsi', 'whwe0KD_rGw', 'Vida'],
      ['O My Friend', 'TELUGU', '2007', 'Mickey J. Meyer', 'nYVrSXmdKNk', 'Happy Days'],
      ['Toh Phir Aao', 'HINDI', '2007', 'Pritam', '_NWaYjsz3qY', 'Awarapan'],
      ['Tchê tcherere tchê tchê', 'Portuguese', '2011', 'Gusttavo Lima', 'Z1ZKaR-9Kt4', 'Balada'],
      ['Aakhon ke Sagar', 'HINDI', '2004', 'Fuzön', 'dxekUFhmFu4', ' Saagar'],
      ['Afghan Jalebi', 'HINDI', '2015', 'Pritam', 'V_92Ry6aKe0', 'Phantom'],
      ['Khoon Chala', 'TAMIL', '2006', 'AR RAHMAN', 'ezfrbmJuLBM', 'Rang De Basanti'] ,
      ['Singappenney', 'TAMIL', '2019', 'A.R Rahman', 'IiUNRYQ1Cak', 'Bigil'],
      ['Kadavulae Vidai', 'TAMIL', '2017', 'Anirudh Ravichander', 'Hfh_dcVaN5o', 'Rum'],
      ['Roobaroo', 'HINDI', '2006', 'A. R. Rahman', 'BrfRB6aTZlM', 'Rang De Basanti'],
      ['Yaarumilla', 'TAMIL', '2014', 'A. R. Rahman', 'idZ-5amTsHA', 'Kaaviyathalaivan'],
      ['Khamoshiyan', 'HINDI', '2015', 'Mithoon', 'Mv3SZDP7QUo', ' Khamoshiyan'],
      ['Rude', 'ENGLISH', '2013', 'MAGIC!', 'aRtJqhe6YaY', 'Rude'],
      ["Fa la la", 'ENGLISH', '2011', 'Justin Bieber', 'PyoiR7jQhkg', 'Under the Mistletoe'],
      ['Engeyum Kadhal', 'TAMIL', '2011', 'Harris Jayaraj ', 'Ue0EpN0q_Kc', 'Engeyum Kadhal'],      
      ['Hawayein', 'HINDI', '2017', 'Pritam', 'cYOB941gyXI', 'Jab Harry Met Sejal'],
      ['Abhi Mujh Mein Kahin', 'HINDI', '2012', 'Ajay-Atul', 'oWKgpB2zpgw', 'Agneepath'],
      ['The Saltwater Room', 'ENGLISH', '2008', 'Adam Young', 'qMp3TIVYwwk', 'Maybe', 'I am Dreaming'],
      ['Moongil Thottam', 'TAMIL', '2013', 'A.R Rahman', 'IOA4-EIhtLA', 'Kadal'],
      ['Radha', 'HINDI', '2017', 'Pritam', 'loRj95fRX1c', 'Jab Harry Met Sejal'],
      ['Demons', 'ENGLISH', '2012', 'Imagine Dragons', 'mWRsgZuwf_8', 'Continued Silence EP'],
      ['Tareefan', 'HINDI', '2018', 'Qaran', 'RcbdKqBESz8', 'Veere Di Wedding'],
      ["Somebody That I Used To Know", 'ENGLISH', '2012', 'Gotye', 'Q7DtJJSVPsk', 'Making Mirrors'],
      ["Black Sheep", 'ENGLISH', '2010', 'Metric', 'KifLmoUhbU8', ' Scott Pilgrim vs. the World'],
      ['Starboy', 'ENGLISH', '2016', 'The Weeknd', 'dMMUH_ZpbB0', 'Starboy'],
      ['Magic', 'ENGLISH', '2014', 'Coldplay', '1PvBc2TOpE4', 'A Head Full of Dreams '],
      ['Romeo Attam Pottal ', 'TAMIL', '1996', 'AR RAHMAN', 'mbVrnZt2Eu4', 'Mr Romeo'] ,
      ["Rockabye", 'ENGLISH', '20120167', 'Clean Bandit', '2VDdP7lYiiI', 'Rockabye (Autograf Remix)'],
      ['Agar Tum Saath', 'HINDI', '2015',  'A. R. Rahman', 'sK7riqg2mr4','Tamasha'],
      ['o sayonara', 'TELUGU', '2014', 'Devi Sri Prasad', 'W9hPmEM1SkE', 'nenokkadine'] ,
      ["Wicked Ones", 'ENGLISH', '2014', 'Dorothy', 'kOngAfP_2OE', 'DOROTHY'],
      ['SAJDE', 'HINDI', '2010', 'Pritam', 'zfABYXP_NSA', 'KHATTA MEETHA'],
      ['Adiga Adiga', 'TELUGU', '2017', 'Gopi Sundar', '7dZqS3JIQ1I', 'Ninnu Kori'],
      ['Kaatu Mooliyo', 'MALAYALAM', '2015', 'eShaan Rahman', 'vilA6jt5w6Y', 'Ohm Shanthi Oshaana'],
      ['Enna Solla', 'TAMIL', '2015', 'Anirudh Ravichander', '5iR5V9sHEtQ', 'Thanga Magan'],
      ['The Monster', 'ENGLISH', '2010', 'Eminem', 'EHkozMIXZ8w', 'The Marshall Mathers LP 2'],
      ['Jimikki Kammal', 'MALAYALAM', '2017', 'Shaan Rahman', 'IvkVJt4lhGA', 'Velipadinte Pusthakam'],
      ['Teri Ore', 'HINDI', '2008', 'Pritam', '8-xCwwSY-cI', 'Singh Is Kinng'],      
      ['Love me like you do', 'ENGLISH', '2015', 'Ellie Goulding', '725WlG1idPc', 'DELIRIUM'],      
      ["One love", 'ENGLISH', '2002', 'Blue', 'Rc7cK0jjpL8', 'One love'],
      ['Paarthen', 'TAMIL', '2017', 'Sean Roldan', 'DZOpwL6t3Lw', 'Power Paandi'],
      ['Maate vinadhu ga', 'TELUGU', '2018', 'Jakes Bejoy', 'KMocA8G_puU', 'Taxiwaala'],
      ['Gerua', 'HINDI', '2015', 'Pritam', 'pRCQEI4GGr8', 'Dilwale'],
      ['Faded', 'ENGLISH', '2015', 'Alan Walker', 'qdpXxGPqW-Y', 'Faded'],
      ['Dildara', 'HINDI', '2011', 'Vishal-Shekhar', 'gQ5qVtoLMk4', 'Ra.One'],
      ['Memories', 'ENGLISH', '2019', 'Maroon 5', 'o2DXt11SMNI', 'Memories'],
      ["Toxicity", 'ENGLISH', '2001', 'System Of A Down', '0ukNUCQRPkI', 'Toxicity'],
      ['Kanave Kanave', 'TAMIL', '2013', 'Anirudh Ravichander', 'qD53-RZpTOc', 'David'] ,
      ['Lighters', 'ENGLISH', '2011', 'Bad Meets Evil', 'qJHiMGomJ_A', 'Hell: The Sequel'],
      ['Tukur Tukur', 'HINDI', '2015', 'Pritam', 'hp0g6p2jjvo', 'Dilwale'],
      ['One Last Breath', 'ENGLISH', '2001', 'Creed', 'BzamjXouX5w', 'Weathered'],   
      ['Maate Vinadhuga', 'TELUGU', '2018', 'Jakes Bejoy', 'KMocA8G_puU','Taxiwaala'],
      ['Don’u Don’u Don’u', 'TAMIL', '2015', 'Anirudh', 'Y0eErsVNK-I', 'Maari'],
      ['Naan Nee', 'TAMIL', '2014', 'Santhosh Narayanan', 'VMYWqrlB7Gc', 'Madras'],
      ['Nachave Nizam Pori ', 'TELUGU', '2004', 'Devi Sri Prasad', 'xR85zCreXUo', 'Varsham'],
      ['Beera', 'HINDI', '2010', 'A.R Rahman', '9oN4ePKC0MQ', 'Raavan'],
      ['See You Again', 'ENGLISH', '2010', 'Charlie Puth', 'RgKAFK5djSk', 'See You Again'],
      ['Ennamo Pannura', 'TAMIL', '2016', 'Radhan', 'S4WxvkXbay0', 'muddula koduku'],
      ['Let her go', 'ENGLISH', '2012', 'Passenger', 'fO8IN5W87ws', 'All the Little Lights'],
      ['Eenie Meenie', 'ENGLISH', '2009', 'Justin Bieber', 'prmmCg5bKxA', 'My Worlds'],
      ['Fix You', 'ENGLISH', '2005', 'Coldplay', 'SYmJ_YcC_Fg', 'X&Y'],
      ['Aha Allari', 'TELUGU', '2002', ' Devi Sri Prasad', '5sqMIH_F5ks', 'Kadgam'],
      ['Airplanes', 'ENGLISH', '2010', ' B.o.B', 'Yy2aIH4XYpg', 'B.o.B Presents: The Adventures of Bobby Ra'],
      ['Ey Hairathe', 'HINDI', '2007', 'A. R. Rahman', '038jmlSH3iM', 'Guru'],
      ['Emaindo Gaani', 'TELUGU', '2009', 'Achu & Dharan', 'E00t7gYiccE', 'Neenu Meeku Thelusa'],
      ['Break Your Heart', 'ENGLISH', '2009', 'Taio Cruz', 'TYnyYJ-jHFI', 'Rokstarr '], 
      ['Cheliya Cheliya', 'TELUGU', '2001', 'Mani Sharma', '_ruDPvH9_Eg', 'Kushi'],
      ['Enduko Madi', 'TELUGU', '2009', 'Achu & Dharan', '9sdzCtElP-8', 'Neenu Meeku Thelusa'],
      ['Doorie', 'HINDI', '2006', 'Atif Aslam', 'Jv2Z9KJgYjU', 'Doorie'],      
      ['Little Talks', 'ENGLISH', '2011', 'Of Monsters and Men', 'ghb6eDopW8I', 'My Head Is an Animal'],
      ['Nenani Neevani', 'TELUGU', '2008', 'Mickey J. Meyer', 'x6HDlIGRk10', 'Kothabangarulokam'],   
      ['Tera Hone Laga Hoon', 'HINDI', '2009', 'Pritam', 'rTuxUAuJRyY', 'Ajab Prem Ki Ghazab Kahani'],
      ['Tu Jaane Na', 'HINDI', '2009', 'Pritam', 'P8PWN1OmZOA', 'Ajab Prem Ki Ghazab Kahani'],
      ["It Ain't Me", 'ENGLISH', '2017', 'Selena Gomez', 'u3VTKvdAuIY', 'Stargazing'],
      ['Luka Chuppi', 'HINDI', '2006', 'A. R. Rahman', '_ikZtcgAMxo', 'Rang De Basanti'],
      ['Stairway To Heaven', ' ENGLISH', '1971', ' Led Zeppelin', 'QkF3oxziUI4', ' The Song Remains the Same'],
      ['Ullaallaa', 'TAMIL', '2019', 'Anirudh', 'UvQ9y4w8unE', 'Petta'],
      ['Sonapareeya', 'TAMIL', '2013', 'AR Rahman', 'HdBxoARI7E8', 'Maryan'],
      ['Soniya', 'TAMIL', '1997', 'AR RAHMAN', 'sHbiwr5Ue6Y', 'Ratchagan'] ,
      ['Otha Sollaala', 'TAMIL', '2011', 'GV Prakash', 'FNLrzbv0Vdg', 'Aadukalam'],
      ['Azhagiye', 'TAMIL', '2017', 'AR Rahman', 'TFUBlO-zJGg', 'Kaatru Veliyidai'],
      ['Edhuta Nilichindhi', 'TELUGU', '2008', 'Kamalakar', 'rXumims1q98', 'Vaana'],
      ['Secret of Success ', 'TAMIL', '2003', 'AR RAHMAN', 'kjOrdWcybpg', 'Boys'] ,
      ['Nuvve Nuvve', 'TELUGU', '2015', 'S. S. Thaman', 'B-mW-XIYHGk', 'Kick 2'],
      ['Chirugali Veechane', 'TELUGU', '2003', 'Ilaiyaraaja', '9gC9ysiI2vA', 'Siva Putrudu '],
      ['Taal Taal Se Taal (Western)', 'HINDI', '1999', 'AR RAHMAN', 'MelMTp_dxNQ', 'Taal'] ,
      ['Ok Anesa', 'TELUGU', '2008', 'Mickey J. Meyer', '7saoh3n0fjY', 'Kothabangarulokam '],
      ['Roja Kadale', 'TAMIL', '2015', 'Harris Jayaraj', '9hVjc3sUSjA', 'Anegan'],
      ['Pillaa Raa', 'TELUGU', '2018', 'Chaitan Bharadwaj', 'ounfulDDQSc','RX 100'],
      ['Aalaporaan Thamizhan', 'TAMIL', '2017', 'A.R Rahman', '3XmrZaVVUpc', 'Mersal'],
      ["Holiday", 'ENGLISH', '2004', 'Green Day', 'sO-S32xnXA0', 'American Idiot'],      
      ['DOORIYAN', 'HINDI', '2009', '‎Pritam', '-7z3YeFqd7xQ', 'Love Aaj Kal'],
      ['Bhaag DK Bose', 'HINDI', '2011', 'Ram Sampath', 'Vc1NR-cMchc', 'Delhi Belly'],      
      ['Satyameva Jayathe', ' ENGLISH', '2011', ' SuperHeavy', 'RNrDGaDU7ug', 'SuperHeavy'],
      ['Idhazhin Oram', 'TAMIL', '2012', 'Anirudh Ravichander', 'lZORMUufA_Y', '3'],
      ['Beautiful ', 'ENGLISH', '2008', 'Akon', 'wePsgv7utPE', ' Beautiful (Reggae Remix)'],
      ['Tum Mile', 'HINDI', '2009', 'Pritam', 'odVptmgIcD0', ' Tum Mile'],
      ['Pedave Palikina', 'TELUGU', '2004', 'A. R. Rahman', 'qvTtvP5Neqg', 'Naani'],
      ["Treat You Better", 'ENGLISH', '2016', 'Shawn Mendes', 'EvDz91ZmOD0', 'Illuminate'],
      ["Falcon Eye", 'ENGLISH', '2017', 'Off Bloom', 'VASKfvfTePI', 'Falcon Eye'],
      ['Sucker', 'ENGLISH', '2019', 'Jonas Brothers', 'Ty0WEJvlljs', 'Happiness Begins'],
      ['Sahana', 'TAMIL', '2007', 'AR RAHMAN', 'lTPQ6i0cSZM', 'Sivaji: The Boss'] ,      
      ['Malare', 'MALAYALAM', '2015', 'Rajesh Murugesan', '0G2VxhV_gXM', 'Premam'],
      ['Tung Tung Baje', 'HINDI', '2015', '	Sneha Khanwalkar', 'u2VhHGAtr4g', 'Singh Is Bliing'],
      ['Allah Maaf Kare', 'HINDI', '2011', 'Pritam', 'BhtHOzkQRpI', 'Desi Boyz'],
      ['Danza Kuduro', 'Portuguese', '2010', 'Don Omar', 'YPlZ-nJewRE', 'Don Omar Presents: Meet the Orphans'],
      ['Nenjukkule', 'TAMIL', '2013', 'A.R Rahman', 'XYZwp-WAg6I', 'Kadal'],
      ['Main Agar Kahoon', 'HINDI', '2007', 'Vishal-Shekhar', 'DAYszemgPxc', 'Om Shanti Om'],
      ['My Love', 'ENGLISH', '2000', 'Westlife', 'btUTQeto940', 'Coast to Coast'],
      ['Yaanji', 'TAMIL', '2017', 'Anirudh Ravichander', 'bWK3EuroEk4', 'Vikram Vedha'] ,
      ['Happier', 'ENGLISH', '2018', 'Marshmello', 'm7Bc3pLyij0', 'Happier'],
      ['Shape of you', 'ENGLISH', '2017', 'Ed Sheeran', 'VJ2rlci9PE0', 'Shape of You (Stormzy Remix)'],
      ['Kun Faya Kun', 'HINDI', '2011', 'A.R Rahman', '0RDI9CMilhk', ' Rockstar'],
      ['Boochade Boochade', 'TELUGU', '2014', 'S. Thaman', 'P0dHPM0Gzzc', 'Race Gurram'],
      ['Party in the USA', 'ENGLISH', '2009', 'Miley Cyrus', 'BlHsvqzHvag', 'Party in the U.S.A.'],
      ['The Fighter', 'ENGLISH', '2011', 'Gym Class Heroes', 'bxV-OOIamyk', 'The Papercut Chronicles II'],
      ['Love the way you lie', 'ENGLISH', '2010', 'Eminem', 'uelHwf8o7_U', 'Recovery'],
      ['Subha Hone Na De', 'HINDI', '2011', 'Pritam', '_wMsvhz8YSk', 'Desi Boyz'],
      ['Undiporaadhey', 'TELUGU', '2018', 'Radhan', 'lewVFlngGCk', 'Hushaaru'],
      ['Nothing Else Matters', 'ENGLISH', '1992', 'Metallica', 'tAGnKpE4NCI', 'Metallica'],
      ['Stereo Hearts', 'ENGLISH', '2011', 'Gym Class Heroes', 'T3E9Wjbq44E', 'The Papercut Chronicles II'],
      ['Dil Kya Kare', 'HINDI', '2007', 'Shankar-Ehsaan-Loy', 'gZjnUcJy-Rw', 'SALAAM-E-ISHQ'],
      ['Tere Bin', 'HINDI', '2007', 'Rabbi Shergill', '1IMzEh0dsxs', '-'],
      ['AADAT', 'HINDI', '2007', 'JAL', 'wJJBUtzjfgg', 'AADAT'],
      ['Show me the meaning', 'ENGLISH', '1999', ' Backstreet Boys', '38httsOpl8g', 'Millennium'],
      ["Livin' La Vida Loca", 'HINDI', '1999', 'Ricky Martin', 'p47fEXGabaY', 'Ricky Martin'],
      ['Khwaja Mere Khwaja', 'HINDI', '2008', 'A. R. Rahman', 'rf9_x9fT0rY', 'Jodha Akabar'],
      ['Bailamos', 'HINDI', '1999', ' Enrique Iglesias', '5sye_VxmNZA', 'Cosas del Amor'],
      ["When I'm Gone", 'ENGLISH', '2005', 'Eminem', '1wYNFfgrXTI', "When I'm Gone"],
      ['Numb', 'ENGLISH', '2003', 'Linkin Park', '8P0vKLHbtMg', 'Meteora'],
      ['Airplanes Pt II', 'ENGLISH', '2010', ' B.o.B', 'MK29MlRUt48', 'B.o.B Presents: The Adventures of Bobby Ray'],
      ['Kannanule', 'TELUGU', '1995', 'A. R. Rahman', 'p-1gysnu4MM', 'Bombay'],
      ['Mazhai Kuruvi', 'TAMIL', '2019', 'A.R. Rahman', 'bt4-FwVe1Fk', 'Chekka Chivantha Vaanam'],
      ['Right Now (Na Na Na)', 'ENGLISH', '2008', 'Akon', 'If5KeoEDGoo', 'Right Now (Na Na Na)'],
      ['Woh Lamhey', 'HINDI', '2007', 'JAL', 'cp2UQ0iE-MU', 'AADAT'],
      ['Do you know', 'ENGLISH', '2007', 'Enrique Iglesias', 'dZ7bW8JVlco', 'Insomniac'],
      ['In The End', 'ENGLISH', '2002', 'Linkin Park', 'fv1pMNdsGWE', 'Reanimation'],
      ['Po Indru Neeyaga', 'TAMIL', '2014', 'Anirudh Ravichander', 'ADJSD_oh5nU', 'Velai Illa Pattadhaari'],
      ['Saibo', 'HINDI', '2011', 'Sachin-Jigar', 'GtNrQy90Ih4', 'Shor in the City'],
      ['Anjali Anjali ', 'TAMIL', '1994', 'AR RAHMAN', 'B_iuts4M5ZE', 'Duet'] ,
      ["C'est La Vie", 'FRENCH-ARABIC', '2013', 'Cheb Khaled', 'defnPu0Jz3Y', 'Cest La Vie (Remixes)'],
      ['Andamaina Premarani', 'TELUGU', '1994', 'A. R. Rahman', 'kqXTFX4mNOg','Premikudu'],
      ["All Rise", 'ENGLISH', '2001', 'Blue', 'tvIn3xTNO9Y', 'All Rise'],
      ["Youth Of The Nation", 'ENGLISH', '2001', 'P.O.D', '1wNjBR_jZ9M', 'Satellite'],
      ["Dream on", 'ENGLISH', '1973', 'Aerosmith', '4Y0lAQomh9g', 'Aerosmith'],
      ['Pookkale Satru', 'TAMIL', '2017', 'AR Rahman', 'OCsrcPizVjA', 'I'],
      ['21 Guns', 'ENGLISH', '2004', 'Green Day', 'w29aq_sgwxw', '21 Guns'],
      ['Beautiful', 'ENGLISH', '2009', 'Eminem', 'WDsWiUObdes', 'Relapse'],	
      ['Zaalima', 'HINDI', '2017', 'Ram Sampath', 'hhdSyBHuI88', 'Raees'],	
      ['Sky full of stars', 'ENGLISH', '2014', 'Coldplay', 'ot_snHDVTUU', 'Ghost Stories'],	
      ['Hymn For The Weekend', 'ENGLISH', '2015', 'Coldplay', 'YykjpeuMNEk', 'A Head Full of Dreams'],	
      ['Space Bound', 'ENGLISH', '2010', ' Eminem', 'JByDbPn6A1o', 'Recovery'],
      ["DJ Got Us Fallin' In Love", 'ENGLISH', '2010', 'Usher', 'C-dvTjK_07c', 'Versus'],
      ['Viva La Vida', 'ENGLISH', '2008', 'Coldplay', 'dvgZkm1xWPE', 'Viva La Vida or Death and All His Friends'],
      ['Wake Me up When September Ends', 'ENGLISH', '2004', 'Green Day', 'ulRXvH8VOl8', 'American Idiot'],
      ['Udhungada Sangu', 'TAMIL', '2014', 'Anirudh Ravichander', 'RCXzH27eOIA', 'Velai Illa Pattadhaari'],
      ['O Sona', 'TELUGU', '1999', 'Deva', '5X-NctqvcBU', 'Vaali'],
      ['Cheap Thrills', 'ENGLISH', '2016', 'Sia', 'nEIHHydwec8', 'This Is Acting'],
      ["Seven nation army", 'ENGLISH', '2003', 'The White Stripes', 's2i82up9E1w', 'Elephant'],
      ['ROCK THA PARTY', 'HINDI', '2016', 'BOMBAY ROCKERS', 'areBR3RVBVc', 'ROCKY HANDSOME'] ,
      ['Baarish', 'HINDI', '2008', 'Tanishk Bagchi', 'BNfAf4To73c', 'Half Girlfriend'],
      ['Replay (Prequel)', 'ENGLISH', '2009', 'Iyaz', 'WXxV9g7lsFE', 'Replay'],
      ['Deivangal Ingae', 'TAMIL', '2015', 'Harris Jayaraj', 'K5yJ7eVMRUA', 'Anegan'],
      ['Sawan Aaya Hai', 'HINDI', '2014', 'Tony Kakkar', 'B5_6jfGsyjA', ' Creature 3D'],
      ['Bailando', 'ENGLISH', '2013', 'Enrique Iglesias', 'b8I-7Wk_Vbc', 'Bailando (Remixes)'],
      ['Soul Sister', 'ENGLISH', '2009', 'Train', 'JloUN9j9cJ8', 'Hey, Soul Sister: Remixes EP'],
      ['María', 'SPANISH', '1995', 'Ricky Martin', 'vCEvCXuglqo', 'A Medio Vivir'],
      ['Aye Amaayika', 'TELUGU', '2015', 'A. R. Rahman', 'gB0-MOcIiBU', 'OK Bangaram'],
      ['Not Afraid', 'ENGLISH', '2010', ' Eminem', 'j5-yKhDd64s', 'Road to Recovery: Withdrawal'],
      ['Dynamite', 'ENGLISH', '2009', 'Taio Cruz', 'Jq8rVrcbUXY', 'Rokstarr '],      
      ['Yekommakakomma', 'TELUGU', '1999', 'Mani Sharma', '9eJgdZsUw8U', 'Seenu'],
      ['Good Riddance', ' ENGLISH', '1997', ' Green Day', 'Nwhyj0zcD7M', ' Nimrod'],
      ["What I've done", 'ENGLISH', '2007', 'Linkin Park', '4v97gsFRMlE', "What I've Done"],
      ['Afterglow', 'ENGLISH', '2005', 'INXS', 'OnTelUJrDhc', 'Switch'],
      ['Maula Mere Maula', 'HINDI', '2007', 'Mithoon', 'ptdVuijIQQE', 'Anwar'],
      ['Ye Chilipi', 'TELUGU', '2004', 'Harris Jayaraj', '5dQHjDuK-0w', 'Gharshana'],
      ['Keep you much Longer', 'ENGLISH', '2008', 'Akon', '2e6kYfGeCmg', 'Freedom'],
      ['Mellaga Mellaga', 'TELUGU', '1995', 'Deva', '_C_3rZDdSAY', 'Asha Asha Asha'],   
      ['Whenever Wherever', 'ENGLISH', '2001', 'Shakira', 'cZhli2OT5Rg', 'Laundry Service'],
      ['Ayyayo', 'TAMIL', '2011', 'G.V.Prakash Kumar', 'uxb-TMoqb9k', 'Aadukalam'],
      ['Flight', ' ENGLISH', '2013', ' Hans Zimmer', 'w4OdIOGBW2Q', 'Man of Steel'],

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
