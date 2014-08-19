//create empty variables for each month to hold the strings of quotes

var janQuotes = [
["Jan", "1876", "Native Americans", "The United States ordered all Native Americans to move into reservations."],
["Jan","1953", "NBA Baltimore Bullets players", 'The Baltimore Bullets began a 32 game road losing streak.'],
["Jan","1990", "Manuel Antonio Noriega", "After holing up for 10 days at the Vatican embassy in Panama City, General Manuel Noriega surrenders to U.S. troops to face charges of drug trafficking."],
["Jan","1974", "President Richard Nixon", "President Richard Nixon refuses to hand over tape recordings and documents that had been subpoenaed by the Senate Watergate Committee. Marking the beginning of the end of his Presidency, Nixon would resign from office in disgrace eight months later."],
["Jan","1643", "The institute of marriage", "In the first record of a legal divorce in the American colonies, Anne Clarke of the Massachusetts Bay Colony is granted a divorce from her absent and adulterous husband, Denis Clarke, by the Quarter Court of Boston, Massachusetts."],
["Jan","1838", "The smoke signal", "On this day in 1838, Samuel Morse's telegraph system is demonstrated for the first time at the Speedwell Iron Works in Morristown, New Jersey. The telegraph, a device which used electric impulses to transmit encoded messages over a wire, would eventually revolutionize long-distance communication, reaching the height of its popularity in the 1920s and 1930s."],
["Jan","1999", "Bill Clinton", "On January 7, 1999, the impeachment trial of President Bill Clinton, formally charged with lying under oath and obstructing justice, begins in the Senate. As instructed in Article 1 of the U.S. Constitution, Supreme Court Chief Justice William Rehnquist was sworn in to preside, and the senators were sworn in as jurors."],
["Jan","2000", "Buffalo Bills fans", "In an American Football Conference (AFC) wild card match-up at Adelphia Coliseum in Nashville, Tennessee, the Tennessee Titans stage a last-second come-from-behind victory to beat the Buffalo Bills 22-16 on a kickoff return play later dubbed the \"Music City Miracle.\""],
["Jan","2007", "The flip style cell phone", "Apple Inc. CEO Steve Jobs unveils the iPhone—a touchscreen mobile phone with an iPod, camera and Web-browsing capabilities, among other features—at the Macworld convention in San Francisco."],
["Jan","1982", "Dallas Cowboy fans", "San Francisco 49ers wide receiver Dwight Clark makes a leaping catch in the end zone on a pass from quarterback Joe Montana with 51 seconds left in the National Football Conference (NFC) championship game against the Dallas Cowboys. \"The Catch\" set up a successful extra point kick by Ray Wersching that lifted the 49ers to a 28-27 victory and a trip to Super Bowl XVI."],
["Jan","1927", "Charlie Chaplin", "Charlie Chaplin’s $16 million estate is frozen by court receivers after his second wife, Lita Grey Chaplin, sues for divorce."],
["Jan","1991", "Saddam Hussein", "The U.S. Congress gives the green light to military action against Iraq in the Persian Gulf Crisis."],
["Jan","1919", "Alcohol", "California votes to ratify the prohibition amendment."],
["Jan","1526", "Francis of France", "After being held captive by Charles V for a year, signs the Treaty of Madrid, giving up most of his claims in France and Italy."],
["Jan","2001", "Encyclopedia salespersons", "Wikipedia goes online."],
["Jan","600", "The phrase gesundheit", "Pope Gregory the Great decreea saying \"God bless You\" is the correct response to a sneeze."],
["Jan","1950", "Brinks armored cars company", "11 men steal more than $2 million from the Brinks Armored Car depot in Boston, Massachusetts."],
["Jan","1990", "Mayor Marion Barry", "At the end of a joint sting operation by FBI agents and District of Columbia police, Mayor Marion Barry is arrested and charged with drug possession and the use of crack, a crystalline form of cocaine"],
["Jan","2007", "Chinese diet", "Beijing, China, the capital city of the planet's most populous nation, gets its first drive-through McDonald's restaurant."],
["Jan","1863", "Genreal Burnside", "Union General Ambrose Burnside's Army of the Potomac begins an offensive against General Robert E. Lee's Army of Northern Virginia that quickly bogs down as several days of heavy rain turn the roads of Virginia into a muddy quagmire. The campaign was abandoned three days later."],
["1950", "Alger Hiss", "In the conclusion to one of the most spectacular trials in U.S. history, former State Department official Alger Hiss is convicted of perjury. He was convicted of having perjured himself in regards to testimony about his alleged involvement in a Soviet spy ring before and during World War II."],
["1807", "Aaron Burr", "President Thomas Jefferson exposes a plot by Aaron Burr to form a new republic in the Southwest."],
["1965", "Bill Russell", "Boston Celtic center Bill Russell misses all 14 shots in loss to Philadelphia Warriors led by Wilt Chamberlain"],
["41", "Caligula", "Shortly after declaring himself a god, Caligula is assassinated by two Praetorian tribunes."],
["1915", "The mailed letter", "Alexander Graham Bell in New York and Thomas Watson in San Francisco make a record telephone transmission."],
["1967", "Chicago citizens", "Chicago Blizzard strikes with a record 23 inches of snow fall causing 800 buses and 50,000 automobiles to be abandoned."],
["1984", "Michael Jackson", "His hair catches fire and he is burned during a commercial filming for Pepsi."],
["1871", "The French Army","Surrounded by Prussian troops and suffering from famine, the French army in Paris surrenders. During the siege, balloons were used to keep contact with the outside world."],
["1978", "Big Hair", "Sweden outlaws aerosol sprays due to their harmful effect on the ozone layer, becoming the first nation to enact such a ban."],
["1798", "Roger Griswold", "Rep Matthew Lyon (Vt) spits in face of Rep Roger Griswold (Ct) in US House of Representatives, after an argument."],
["1871", "Sunbathers in San Fransisco", "Millions of birds fly over western SF, darkening the sky."]
]

var quotes = {


	//January Quotes
	0: {
		1: {
			1: ["1876", "Native Americans", "The United States ordered all Native Americans to move into reservations."],
			2: ["1953", "NBA Baltimore Bullets players", 'The Baltimore Bullets began a 32 game road losing streak.']
		},
		2: 	{
			1: ["1953", "NBA Baltimore Bullets players", 'The Baltimore Bullets began a 32 game road losing streak.'],
			2: ["1953", "NBA Baltimore Bullets players", 'The Baltimore Bullets began a 32 game road losing streak.']
		},
		3: 	{
			1: ["1990", "Manuel Antonio Noriega", "After holing up for 10 days at the Vatican embassy in Panama City, General Manuel Noriega surrenders to U.S. troops to face charges of drug trafficking."],
			2: ["1990", "Manuel Antonio Noriega", "After holing up for 10 days at the Vatican embassy in Panama City, General Manuel Noriega surrenders to U.S. troops to face charges of drug trafficking."]
		},
		4: 	["1974", "President Richard Nixon", "President Richard Nixon refuses to hand over tape recordings and documents that had been subpoenaed by the Senate Watergate Committee. Marking the beginning of the end of his Presidency, Nixon would resign from office in disgrace eight months later."],
		5: 	["1643", "The institute of marriage", "In the first record of a legal divorce in the American colonies, Anne Clarke of the Massachusetts Bay Colony is granted a divorce from her absent and adulterous husband, Denis Clarke, by the Quarter Court of Boston, Massachusetts."],
		6: 	["1838", "The smoke signal", "On this day in 1838, Samuel Morse's telegraph system is demonstrated for the first time at the Speedwell Iron Works in Morristown, New Jersey. The telegraph, a device which used electric impulses to transmit encoded messages over a wire, would eventually revolutionize long-distance communication, reaching the height of its popularity in the 1920s and 1930s."],
		7: 	["1999", "Bill Clinton", "On January 7, 1999, the impeachment trial of President Bill Clinton, formally charged with lying under oath and obstructing justice, begins in the Senate. As instructed in Article 1 of the U.S. Constitution, Supreme Court Chief Justice William Rehnquist was sworn in to preside, and the senators were sworn in as jurors."],
		8: 	["2000", "Buffalo Bills fans", "In an American Football Conference (AFC) wild card match-up at Adelphia Coliseum in Nashville, Tennessee, the Tennessee Titans stage a last-second come-from-behind victory to beat the Buffalo Bills 22-16 on a kickoff return play later dubbed the \"Music City Miracle.\""],
		9: 	["2007", "The flip style cell phone", "Apple Inc. CEO Steve Jobs unveils the iPhone—a touchscreen mobile phone with an iPod, camera and Web-browsing capabilities, among other features—at the Macworld convention in San Francisco."],
		10: ["1982", "Dallas Cowboy fans", "San Francisco 49ers wide receiver Dwight Clark makes a leaping catch in the end zone on a pass from quarterback Joe Montana with 51 seconds left in the National Football Conference (NFC) championship game against the Dallas Cowboys. \"The Catch\" set up a successful extra point kick by Ray Wersching that lifted the 49ers to a 28-27 victory and a trip to Super Bowl XVI."],
		11: ["1927", "Charlie Chaplin", "Charlie Chaplin’s $16 million estate is frozen by court receivers after his second wife, Lita Grey Chaplin, sues for divorce."],
		12: ["1991", "Saddam Hussein", "The U.S. Congress gives the green light to military action against Iraq in the Persian Gulf Crisis."],
		13: ["1919", "Alcohol", "California votes to ratify the prohibition amendment."],
		14: ["1526", "Francis of France", "After being held captive by Charles V for a year, signs the Treaty of Madrid, giving up most of his claims in France and Italy."],
		15: ["2001", "Encyclopedia salespersons", "Wikipedia goes online."],
		16: ["600", "The phrase gesundheit", "Pope Gregory the Great decreea saying \"God bless You\" is the correct response to a sneeze."],
		17: ["1950", "Brinks armored cars company", "11 men steal more than $2 million from the Brinks Armored Car depot in Boston, Massachusetts."],
		18: ["1990", "Mayor Marion Barry", "At the end of a joint sting operation by FBI agents and District of Columbia police, Mayor Marion Barry is arrested and charged with drug possession and the use of crack, a crystalline form of cocaine"],
		19: ["2007", "Chinese diet", "Beijing, China, the capital city of the planet's most populous nation, gets its first drive-through McDonald's restaurant."],
		20: ["1863", "Genreal Burnside", "Union General Ambrose Burnside's Army of the Potomac begins an offensive against General Robert E. Lee's Army of Northern Virginia that quickly bogs down as several days of heavy rain turn the roads of Virginia into a muddy quagmire. The campaign was abandoned three days later."],
		21: ["1950", "Alger Hiss", "In the conclusion to one of the most spectacular trials in U.S. history, former State Department official Alger Hiss is convicted of perjury. He was convicted of having perjured himself in regards to testimony about his alleged involvement in a Soviet spy ring before and during World War II."],
		22: ["1807", "Aaron Burr", "President Thomas Jefferson exposes a plot by Aaron Burr to form a new republic in the Southwest."],
		23: ["1965", "Bill Russell", "Boston Celtic center Bill Russell misses all 14 shots in loss to Philadelphia Warriors led by Wilt Chamberlain"],
		24: ["41", "Caligula", "Shortly after declaring himself a god, Caligula is assassinated by two Praetorian tribunes."],
		25: ["1915", "The mailed letter", "Alexander Graham Bell in New York and Thomas Watson in San Francisco make a record telephone transmission."],
		26: ["1967", "Chicago citizens", "Chicago Blizzard strikes with a record 23 inches of snow fall causing 800 buses and 50,000 automobiles to be abandoned."],
		27: ["1984", "Michael Jackson", "His hair catches fire and he is burned during a commercial filming for Pepsi."],
		28: ["1871", "The French Army","Surrounded by Prussian troops and suffering from famine, the French army in Paris surrenders. During the siege, balloons were used to keep contact with the outside world."],
		29: ["1978", "Big Hair", "Sweden outlaws aerosol sprays due to their harmful effect on the ozone layer, becoming the first nation to enact such a ban."],
		30: ["1798", "Roger Griswold", "Rep Matthew Lyon (Vt) spits in face of Rep Roger Griswold (Ct) in US House of Representatives, after an argument."],
		31: ["1871", "Sunbathers in San Fransisco", "Millions of birds fly over western SF, darkening the sky."]
	},

	//February Quotes
	1: {
		1: 	["1906", "Criminals", "The 1st federal penitentiary building was completed in Leavenworth, Kansas."],
		2: 	["1992", "Willie Nelson", "Willie Nelson settles with the IRS for 9 million dollars."],
		3: 	["1690", "Coins", "The first paper money in America is issued in the Massachusetts Bay Colony."],
		4: 	["1971", "Rich English guys", "The British car maker Rolls Royce declared itself bankrupt."],
		5: 	["1988", "Evan Mecham", "Arizona House of Reps vote to impeach Republican Gov Evan Mecham."],
		6: 	["1951", "Paul Harvey", "Radio commentator Paul Harvey arrested for trying to sneak into Argonne National Laboratory, a nuclear test site located 20 miles west of Chicago."],
		7: 	["1990", "South Torrance HS basketball team", "Lisa Leslie of Morningside HS in Inglewood California scores 101 in 1st half, South Torrance HS decides not to play 2nd half & loses 102-24."],
		8: 	["1926", "Roy Disney", "Disney Brothers Cartoon Studio becomes Walt Disney Studios."],
		9: 	["1891", "Kids in San Fransisco", "The first shipment of asparagus arrives in San Fransisco"],
		10: ["1996", "Gary Kasparov", "After three hours, world chess champion Gary Kasparov loses the first game of a six-game match against Deep Blue, an IBM computer capable of evaluating 200 million moves per second."],
		11: ["1960", "Radio Stations", "The Payola scandal reaches a new level of public prominence and legal gravity on this day in 1960, when President Eisenhower called it an issue of public morality and the FCC proposed a new law making involvement in Payola a criminal act."],
		12: ["2008", "GM","In an attempt to cut costs, struggling auto giant General Motors (GM) offers buyouts to all 74,000 of its hourly employees in the U.S. represented by the United Auto Workers (UAW) union. The move came after GM lost $38.7 billion in 2007, which at the time was the largest loss ever experienced by any car maker."],
		13: ["1633", "Galileo", "Italian philosopher, astronomer and mathematician Galileo Galilei arrives in Rome to face charges of heresy for advocating Copernican theory, which holds that the Earth revolves around the Sun."],
		14: ["278", "St. Valentine", "Valentine, a holy priest in Rome in the days of Emperor Claudius II, was executed."],
		15: ["1898", "The USS Maine", "A massive explosion of unknown origin sinks the battleship USS Maine in Cuba's Havana harbor."],
		16: ["1923", "King Tut's Remains", "In Thebes, Egypt, English archaeologist Howard Carter enters the sealed burial chamber of the ancient Egyptian ruler King Tutankhamen."],
		17: ["1928", "Productivity", "The first color television is demonstrated at the Dominion Theatre in London."],
		18: ["2001", "Robert Hanssen", "FBI agent Robert Hanssen is arrested for spying for the Soviet Union. He was ultimately convicted and sentenced to life in prison."],
		19: ["1807", "Aaron Burr", "VP Aaron Burr arrested in Alabama for treason."],
		20: ["1985", "unplanned pregnancy", "In a highly controversial vote, the Irish government defies the powerful Catholic Church and approves the sale of contraceptives"],
		21: ["1994", "Aldrich Ames", "CIA operative Aldrich Ames is arrested for selling secrets to the Soviet Union."],
		22: ["1980", "Russian hockey", "In one of the most dramatic upsets in Olympic history, the underdog U.S. hockey team, made up of college players, defeats the four-time defending gold-medal winning Soviet team at the XIII Olympic Winter Games in Lake Placid, New York."],
		23: ["1958", "Juan Manuel Fangio", "Five-time Formula One champion Juan Manuel Fangio of Argentina is kidnapped in Cuba by a group of Fidel Castro's rebels."],
		24: ["1868", "Andrew Johnson", "The U.S. House of Representatives votes 11 articles of impeachment against President Andrew Johnson, nine of which cite Johnson's removal of Secretary of War Edwin M. Stanton, a violation of the Tenure of Office Act. The House vote made President Johnson the first president to be impeached in U.S. history."],
		25: ["1779", "British Forces", "Fort Sackville is surrendered, marking the beginning of the end of British domination in America's western frontier."],
		26: ["1982", "Rev Jesse Jackson", "Acknowledges that he called NYC \"Hymietown\""],
		27: ["2003", "Biljana Plavsic", "Former Bosnian Serb leader Biljana Plavsic is sentenced by the U.N. tribunal in The Hague, Netherlands, to 11 years in prison."],
		28: ["1989", "Brian Gumbel", "Letter by Brian Gumbel cirticizing Today Show co-workers becomes public."]
	},

	//March Quotes
	2: {
		1: 	["1932", "The Lindbergh Family", "In a crime that captured the attention of the entire nation, Charles Lindbergh III, the 20-month-old son of aviation hero Charles Lindbergh, is kidnapped from the family's new mansion in Hopewell, New Jersey."],
		2: 	["1978", "Charlie Chaplin's Corpse", "n one of history’s most famous cases of body-snatching, two men steal the corpse of the revered film actor Sir Charles Chaplin from a cemetery in the Swiss village of Corsier-sur-Vevey, located in the hills above Lake Geneva, near Lausanne, Switzerland."],
		3: 	["1845", "John Tyler", "Congress reins in President John Tyler's zealous use of the presidential veto, overriding it with the necessary two-thirds vote. This marked Congress' first use of the Consitutional provision allowing Congressional veto overrides and represented Congress' parting gift to Tyler as he left office."],
		4: 	["1987", "Ronald Reagan", "President Reagan takes full responsibility for the Iran-Contra affair in a national address."],
		5: 	["1969", "Jim Mirrison", "The Dade County Sheriff's Office issues an arrest warrant for Doors' lead singer Jim Morrison. He is charged with a single felony count and three misdemeanors for his stage antics at a Miami concert a few days earlier."],
		6: 	["1899", "Headaches", "The Imperial Patent Office in Berlin registers Aspirin, the brand name for acetylsalicylic acid, on behalf of the German pharmaceutical company Friedrich Bayer & Co."],
		7: 	["1876", "Telegrams", "29-year-old Alexander Graham Bell receives a patent for his revolutionary new invention-the telephone."],
		8: 	["1993", "Music Videos", "The Music Television Network (MTV) airs the first episode of the animated series Beavis and Butthead, which will go on to become the network’s highest-rated series up to that point."],
		9: 	["1562", "Love", "Kissing in public is banned in Naples and is punishable by death."],
		10: ["1963", "The guy guarding Wilt Chamberlain", "Wilt Chamberlain of NBA SF Warriors scores 70 points vs Syracuse."],
		11: ["1969", "Fashion", "Levi-Strauss starts to sell bell-bottomed jeans."],
		12: ["1963", "The guy guarding Wilt Chamberlain", "Wilt Chamberlain of NBA SF Warriors scores 70 points vs Syracuse."],
		13: ["1969", "Fashion", "Levi-Strauss starts to sell bell-bottomed jeans."],
		14: ["1876", "Telegrams", "29-year-old Alexander Graham Bell receives a patent for his revolutionary new invention-the telephone."],
		15: ["1932", "The Lindbergh Family", "In a crime that captured the attention of the entire nation, Charles Lindbergh III, the 20-month-old son of aviation hero Charles Lindbergh, is kidnapped from the family's new mansion in Hopewell, New Jersey."],
		16: ["1978", "Charlie Chaplin's Corpse", "n one of history’s most famous cases of body-snatching, two men steal the corpse of the revered film actor Sir Charles Chaplin from a cemetery in the Swiss village of Corsier-sur-Vevey, located in the hills above Lake Geneva, near Lausanne, Switzerland."],
		17: ["1845", "John Tyler", "Congress reins in President John Tyler's zealous use of the presidential veto, overriding it with the necessary two-thirds vote. This marked Congress' first use of the Consitutional provision allowing Congressional veto overrides and represented Congress' parting gift to Tyler as he left office."],
		18: ["1987", "Ronald Reagan", "President Reagan takes full responsibility for the Iran-Contra affair in a national address."],
		19: ["1969", "Jim Mirrison", "The Dade County Sheriff's Office issues an arrest warrant for Doors' lead singer Jim Morrison. He is charged with a single felony count and three misdemeanors for his stage antics at a Miami concert a few days earlier."],
		20: ["1899", "Headaches", "The Imperial Patent Office in Berlin registers Aspirin, the brand name for acetylsalicylic acid, on behalf of the German pharmaceutical company Friedrich Bayer & Co."],
		21: ["1876", "Telegrams", "29-year-old Alexander Graham Bell receives a patent for his revolutionary new invention-the telephone."],
		22: ["1932", "The Lindbergh Family", "In a crime that captured the attention of the entire nation, Charles Lindbergh III, the 20-month-old son of aviation hero Charles Lindbergh, is kidnapped from the family's new mansion in Hopewell, New Jersey."],
		23: ["1978", "Charlie Chaplin's Corpse", "n one of history’s most famous cases of body-snatching, two men steal the corpse of the revered film actor Sir Charles Chaplin from a cemetery in the Swiss village of Corsier-sur-Vevey, located in the hills above Lake Geneva, near Lausanne, Switzerland."],
		24: ["1845", "John Tyler", "Congress reins in President John Tyler's zealous use of the presidential veto, overriding it with the necessary two-thirds vote. This marked Congress' first use of the Consitutional provision allowing Congressional veto overrides and represented Congress' parting gift to Tyler as he left office."],
		25: ["1987", "Ronald Reagan", "President Reagan takes full responsibility for the Iran-Contra affair in a national address."],
		26: ["1969", "Jim Morrison", "The Dade County Sheriff's Office issues an arrest warrant for Doors' lead singer Jim Morrison. He is charged with a single felony count and three misdemeanors for his stage antics at a Miami concert a few days earlier."],
		27: ["1899", "Headaches", "The Imperial Patent Office in Berlin registers Aspirin, the brand name for acetylsalicylic acid, on behalf of the German pharmaceutical company Friedrich Bayer & Co."],
		28: ["1876", "Telegrams", "29-year-old Alexander Graham Bell receives a patent for his revolutionary new invention-the telephone."],
		29: ["1876", "Telegrams", "29-year-old Alexander Graham Bell receives a patent for his revolutionary new invention-the telephone."],
		30: ["1987", "Ronald Reagan", "President Reagan takes full responsibility for the Iran-Contra affair in a national address."],
		31: ["2008", "Aloha Airlines","They went bankrupt and permanently ended passenger service."]
	},

	//April Quotes
	3: {
		1:	["Day 1"],
		2:	["Day 2"],
		3:	["Day 3"],
		4:	["Day 4"],
		5:	["Day 5"],
		6:	["Day 6"],
		7:	["Day 7"],
		8:	["Day 8"],
		9:	["Day 9"],
		10:	["Day 10"],
		11:	["Day 11"],
		12:	["Day 12"],
		13:	["1961", "People of Berlin", "Berlin was divided as East Germany sealed off the border between the city's eastern and western sectors in order to halt the flight of refugees."],
		14:	["1901", "S.S. Islander", "hits an iceberg near Alaska and sinks!"],
		15:	["Day 15"],
		16:	["Day 16"],
		17:	["Day 17"],
		18:	["Day 18"],
		19:	["Day 19"],
		20:	["Day 20"],
		21:	["Day 21"],
		22:	["Day 22"],
		23:	["Day 23"],
		24:	["Day 24"],
		25:	["Day 25"],
		26:	["Day 26"],
		27:	["Day 27"],
		28:	["Day 28"],
		29:	["Day 29"],
		30:	["Day 30"]
	},

	//May Quotes
	4: {
		1:	["Day 1"],
		2:	["Day 2"],
		3:	["Day 3"],
		4:	["Day 4"],
		5:	["Day 5"],
		6:	["Day 6"],
		7:	["Day 7"],
		8:	["Day 8"],
		9:	["Day 9"],
		10:	["Day 10"],
		11:	["Day 11"],
		12:	["Day 12"],
		13:	["1961", "People of Berlin", "Berlin was divided as East Germany sealed off the border between the city's eastern and western sectors in order to halt the flight of refugees."],
		14:	["1901", "S.S. Islander", "hits an iceberg near Alaska and sinks!"],
		15:	["Day 15"],
		16:	["Day 16"],
		17:	["Day 17"],
		18:	["Day 18"],
		19:	["Day 19"],
		20:	["Day 20"],
		21:	["Day 21"],
		22:	["Day 22"],
		23:	["Day 23"],
		24:	["Day 24"],
		25:	["Day 25"],
		26:	["Day 26"],
		27:	["Day 27"],
		28:	["Day 28"],
		29:	["Day 29"],
		30:	["Day 30"],
		31:	["Day 31"]
	},

	//June Quotes
	5: {
		1:	["1638", "The US", "The 1st recorded earthquake happened in Plymouth, Mass."],
		2:	["1780", "London", "Anti-Catholic demonstrators attacked their parliament."],
		3:	["1752", "Moscow", "A lot of their houses and churches were desroyed by a fire."],
		4:	["1845", "The US and Mexico", "The Mexican-US war started."],
		5:	["1900", "Boer Republic of South Africa", "Pretoria, the capital of the Boer Republic of South Africa, fell to the British forces led by General Buller."],
		6:	["1912", "Alaska", "Novarupta, a volcano in Alaska started to erupt. It was the 2nd largest eruption of the 20th century!"],
		7:	["1942", "USS Yorktown", "The ship was sunk near Midway Island. (This is not the same ship that is currently in Charleston, SC.)"],
		8:	["1921", "Babe Ruth", "He was arrested for speeding, fined $100, and held in jail for a while."],
		9:	["1940", "Norway", "Norway surrendered to Germany during WWII."],
		10:	["1358", "Guillaume Cale", "Guillaume was the peasant leader and was captured at the Battle of Mello."],
		11:	["1837", "Boston", "The Broad Street Riot occured, it was fueled by ethnic tensions between English-Americans and Irish-Americans."],
		12:	["1840", "The Netherlands", "A meteorite hit Uden, Netherlands."],
		13:	["1917", "London", "The Germans attacked London by air with their Gotha G bombers during WWI."],
		14:	["1907", "Chinese Day Workers", "The government of Transvaal sent home 50,000 Chinese day workers."],
		15:	["1567", "Jews", "Genoa, Italy expelled Jews from their city."],
		16:	["1567", "Mary, Queen of Scots", "Mary, Queen of Scots was imprisoned in Lochleven Castle prison in Scotland."],
		17:	["1938", "China", "Japan declared war on China."],
		18:	["1961", "Gunsmoke", "CBS radio cancelled Gunsmoke."],
		19:	["1205", "Adolf I", "Pope Innocent III fired Adolf I as archbishop of Cologne."],
		20:	["1941", "German U-203", "The German U-Boat had a failed attempt at sinking a battleship."],
		21:	["1941", "Lefty Grove", "Lefty Grove was on a 20 game winning streak at Fenway until today, he lost to the Browns."],
		22:	["1851", "San Francisco", "A large fire destroyed part of the city."],
		23:	["1941", "Germany", "One of Germany's fighters, a Focke-Wulf FW190 is captured intact when it mistakenly landed at RAF Pembrey in Wales."],
		24:	["1322", "Jews", "The Jews were expelled from France for the 3rd time."],
		25:	["1986", "Vanden Boeynants", "Vanden Boeynants was a Belgium premier that was sentenced for fraud."],
		26:	["1807", "Luxembourg", "Lighting struck a gunpowder warehouse in Luxembourg and caused it to explode."],
		27:	["1759", "Quebec", "General James Wolfe began his siege of Quebec for the British Army."],
		28:	["1904", "SS Norge", "The SS Norge ran aground and sunk off Rockall."],
		29:	["1613", "Shakespeare", "Shakespeare's Globe Theatre burned down."],
		30:	["1559", "King Henry II of France", "King Henry II of France was seriously injured in a jousting match against Gabriel de Montgomery."]
	},

	//July Quotes
	6: {
		1:	["1862", "Polygamists", "Congress outlawed polygamy for the 1st time."],
		2:	["1941", "Palestine", "Palestine is hit by an earthquake."],
		3:	["1090", "Egbert II", "German emperor beats earl Egbert II at the Battle at Hagenoorde."],
		4:	["1866", "Portland, Maine", "A firecracker was thrown into some woods and started a fire that destroyed half of Portland, Maine."],
		5:	["1814", "The British and Canadians", "The Americans defeated the British and Canadians at Chippewa, Ontario."],
		6:	["1652", "Amsterdam", "Amsterdam's city hall burned down."],
		7:	["1520", "The Aztecs", "Hernan Cortes and the Tlaxcalans defeat a numerically superior Aztec force at the Battle of Otumba Mexico."],
		8:	["1792", "Prussia", "France declared war on Prussia."],
		9:	["1790", "The Russian fleet", "The Swedish Navy captured one third of the Russian fleet in the Russo-Swedish War."],
		10:	["1910", "The Chicago White Sox", "The Chicago White Sox Comiskey Park opened. The visting Browns beat them 2 - 0 in their opening game."],
		11:	["1888", "Bennett, Colorado", "The states lowest recorded temperature was set when temperatures dropped to -118 degrees fahrenheit."],
		12:	["1958", "Bakini Island", "The US performed an atmospheric test at Bakini Island."],
		13:	["1978", "Sex Pistols", "BBC banned the Sex Pistols \"No One is Innocent\"."],
		14:	["1995", "Florida Marlins", "The LA Dodger Ramon Martinez pitched a 7-0 no-hitter against the Florida Marlins."],
		15:	["1987", "Boy George", "Boy George was barred from a British television shows. He was thought to be a bad influence for children, and he was therefore deemed inappropriate for viewing."],
		16:	["1980", "Russia", "Polish railway workers blocked a railway into Russia."],
		17:	["1961", "Roger Maris", "Roger Maris lost one of his 61 home-runs due to a rain-out in the 5th inning of the game."],
		18:	["2013", "Detriot, MI", "Detroit, MI filed for bankruptcy to become the largestUS municipal bankruptcy at $18.5 Billion."],
		19:	["1975", "Thurman Munson", "NY Yankee catcher Thurman Munson's 1st-inning single and RBI were nullified because the tar on his bat handle exceeded the 18\" limit."],
		20:	["1968", "Paul McCartney", "Jane Asher called off her engagement with Paul McCartney on live TV."],
		21:	["1989", "Carl Williams", "Mike Tyson knocked out Carl Williams in 1:33 for the heavyweight boxing title."],
		22:	["1986", "Judge Harry E Claiborne", "The House of Reps impeached Judge Harry E Claiborne on charges of tax evasion."],
		23:	["1994", "Fans at the Giants vs. Mets game", "They had to wait 3 hours and 39 minutes for the game to start due to rain.  This is baseballs longest rain delay."],
		24:	["1986", "Jerry Whitworth", "SF Federal jury convicted navy radioman Jerry Whitworth of espionage."],
		25:	["1973", "George Harrison", "George Harrison had to pay a 1,000,000 pound tax on his Bangladesh concert and album."],
		26:	["1981", "NY Mayor Ed Koch", "Mayor Ed Koch was in a Chinese resturant when he started to choke and had to be given the Heimlich maneuver."],
		27:	["1974", "Richard Nixon", "The House Judiciary Committee voted 27-11 recommending Nixon be impeached."],
		28:	["1994", "The MLB", "Baseball players decided to strike." ],
		29:	["1988", "Men", "The last US Playboy Club closed in Lansing, MI."],
		30:	["2006", "Top of the Pops", "Top of the Pops was the worlds longest running music show.  The show had aired for 42 years on BBC Two."],
		31:	["1980", "John Phillips", "John Phillips of Mamas and Papas was arrested on drug charges."]
	},

	//August Quotes
	7: {
		1:	{
			0:	["1953", "Fidel Castro", "Fidel Castro was arrested in Cuba."],
			1:  ["1953", "Fidel Castro", "Fidel Castro was arrested in Cuba."]
		},
		2:	{
			0:  ["1991", "Rick James", "Funk singer Rick James was arrested on sexual torture charges."],
			1:  ["1991", "Rick James", "Funk singer Rick James was arrested on sexual torture charges."]
		},
		3:	{
			0:	["1987", "Joe Niekro", "The Minnesota Twins pitcher, Jor Niekro is caught with a file on the mound and is ejected."],
			1: 	["1987", "Joe Niekro", "The Minnesota Twins pitcher, Jor Niekro is caught with a file on the mound and is ejected."]
		},
		4:	{
			0:  ["1970", "Jim Morrison", "Rocker Jim Morrison was arrested for drunkenness."],
			1:  ["1970", "Jim Morrison", "Rocker Jim Morrison was arrested for drunkenness."]
		},
		5:	{
			0:  ["1964", "North Vietnam", "The US started bombing North Vietnam."],
			1:  ["1964", "North Vietnam", "The US started bombing North Vietnam."]
		},
		6:	{
			0:  ["1974", "Great Northern RR", "An explosion and fire destroyed a Great Northern Railroad yard in Wenatchee, WA."]
		},
		7:	{
			0:  ["1983", "AT&T", "Over 650,000 AT&T employees went on strike."]
		},
		8:	{
			0:  ["1975", "Hank Williams Jr.", "Hank Williams Jr. fell off the side of Ajax Peak in Montana."]
		},
		9:	{
			0:  ["1974", "Richard Nixon", "Richard Nixon is forced to resign as President of The United States of America."]
		},
		10:	{
			0:  ["1984", "Mary Decker", "Mary Decker tripped on the heel of Zola Budd during the 3,000m Olympic run."]
		},
		11:	{
			0: ["1945", "Emperor Hirohito", "Allies refused Japan's surrender offer to retain Emperor Hirohito."]
		},
		12:	{
			0:  ["2000", "Submarine K-141 Kursk", "The Oscar class submarine K-141 Kursk of the Russian Navy exploded and sank in the Barents Sea during a military exercise."]
		},
		13:	{
			0:  ["1961", "the people of Berlin", "Berlin was divided as East Germany sealed off the border between the city's eastern and western sectors in order to halt the flight of refugees."]
		},
		14:	{
			0:  ["1901", "sailors on the S.S. Islander", "when their ship hit an iceberg near Alaska and sinks!"]
		},
		15:	{
			0:  ["1040", "King Duncan I", "Duncan, King of the Scots is killed in battle against his first cousin and rival Macbeth. The latter succeeds him for the throne."]
		},
		16:	{
			0:  ["1988", "New York character", "Mayor Koch vows to wip out street vendors, panhandlers and windshield washers."]
		},
		17:	{
			0:  ["1957", "Alice Roth", "Philadelphia Phillies player, Richie Ashburn fouls a ball that hits Alice Roth twice in the same at bat. The first foul broke her nose, and the second foul hits her while leaving on a stretcher."]
		},
		18:	{
			0: ["1595", "John White", "Governor, John White, of Roanoke Island colony returned from a three year trip to England to find that everyone in his colony, including his daughter and granddaughter, had disappeared."],
			1: ["1593", "John White", "Governor, John White, of Roanoke Island colony returned from a three year trip to England to find that everyone in his colony, including his daughter and granddaughter, had disappeared."]
		},
		19:	{
			0:  ["1999", "Slobodan Milosevic","In Belgrade tens of thousands of Serbians rallied to demand the resignation of Slobodan Milosevic as president of the Federal Republic of Yugoslavia."]
		},
		20:	{
			0:  ["1619", "these men", "The first Black slaves were brought to the colony of Jamestown, Virginia by the Dutch."]
		},
		21:	{
			0:  ["1841", "Peeping Toms", "John Hampton patents venetian blinds."]
		},
		22:	{
			0:  ["1911", "security guards at the Louvre", "The Mona Lisa was stolen from the Louvre by Vincenzo Perugia"]
		},
		23:	["2011", "Muammar al-Gaddafi", "The Libyan leader is overthrown after the National Transitional Council forces take countrol of Bab al-Azizia compound during the 2011 Libyan Civil War."],
		24:	["1961", "justice", "Former Nazi leadier Johannes Voster becomes South Africa's minister of justice."],
		25:	["1814", "bibliophiles", "British forces destroy the Librarry of Congress containing 3,000 books."],
		26:	["2013", "higher education", "25,000 applicants to the University of Liberia failed their university entrance emaination."],
		27:	["1859", "the Earth", "The first successful oil well was drilled. near Titusville, Pennsylvania by Edwin Drake."],
		28:	["1917", "American women", "Ten suffragist wer arrested while picketing in front of the White House."],
		29:	["1533", "the Incan civilization", "Francisco Pizarro ordered the death of the last Incan King of Peru, Atahualpa."],
		30:	["1979", "presidential dignity", "President Carter was attacked by a rabbit on a canoe trip in Plains, Georgia."],
		31:	["1056", "Macedonian dynasty", "Byzantine Empress Theodora became ill and died suddenly. Without children to succeed the throne, the Macedonian dynasty came to a swift end."]
	},

	//September Quotes
	8: {
		1: 	["1689", "bearded men", "In an attempt to westernize his country, Russian Tsar, Peter the Great began tacing men's beards."],
		2:	["Day 2"],
		3:	["Day 3"],
		4:	["1972", "the Montreal Museum of Fine Arts", "18 paintings were stolen from the Montreal Museum of Fine Arts in what was at the time the largest art theft in North America."],
		5:	["1975", "President Ford", "Lynette Fromme attempted to assassinate Ford in Sacramento."],
		6:	["1989", "Parisians", "A computer glitch at the Paris police department led to 41,000 Parisians being accused of murder, extortion, prostitution, drug trafficking, and other serious crimes."],
		7:	["1936", "Benjamin", "At the Hobart Zoo in Tasmania, the last surviving member of the thylacine species, Benjamin, died alon alone in his cage."],
		8:	["2004", "NASA", " The unmanned spacecraft, Genesis, crash-landed when its parachute failed to open."],
		9:	["1971", "Attica prison guards", "1,000 convicts rioted and seized control of Attica, NY prison."],
		10:	["1945", "Mike the chicken", "Mike the Headless Chicken was decapitated and survived for 18 more months."],
		11:	["1962", "Pete Best", "The Beatles replaced their drummer, Pete Best, with Ringo Starr."],
		12:	["Day 12"],
		13:	["2012", "Guatemalans", "33,000 people evacuated their city after Guatemala's Volcano of Fire erupted."],
		14:	["1901", "S.S. Islander", "hits an iceberg near Alaska and sinks!"],
		15:	["1940", "18 year old males", "Congress passed the first peace-time conscription bill."],
		16:	["1946", "the Cubs", "The Cubs lost to the Dodgers 2-0 after only five innings. The game was called due to a gnat infestation."],
		17:	["2010", "Grandmothers", "As the World Turns aired its final episode after being on air for 54 years."],
		18:	["1975", "Patricia Campbell Hearst", "Patricia, after being kidnapped by a political extremist group, was arrested by the FBI for robbing a bank."],
		19:	["1952", "Charlie Chaplin", "After a trip to England, The United Stated barred Mr. Chaplin from re-entering the country."],
		20:	["1932", "Gandhi", "Gandhi began a hunger strike against the treatment of the social class called 'untouchables' in India."],
		21:	["1936", "Spain", "Franco was named generalissimo/supreme commander."],
		22:	["1598", "Ben Johnson", "After winning a duel, playwright and poet Mr. Johnson was indicted for manslaughter."],
		23: ["2012", "Iranians", "Iranian government blocked the use of Google as a search engine."],
		24:	["1890", "mormon polygamists", "President of the Mormon Church in Salt Lake City issued a manifesto advising members that the practice of polygamy should be abandoned."],
		25:	["1780", "Americans", "Benedict Arnold defected to the British."],
		26:	["1960", "UN members", "Fidel castro gave the longest speech in UN history at 4 hours and 29 minutes."],
		27:	["1937", "Balinese Tigers", "The Balinese Tiger was delared extinct."],
		28:	["1904", "cigarette smoking women", "A woman was arrested for smoking a cigarette in a car on 5th Avenue, NYC."],
		29:	["1976", "Norman Owens", "Attempting to shoot soda bottles, Jerry Lee Lewis, hit his bass player, Norman Owens, twice in the chest."],
		30:	["1986", "Mordechai Vanunu", "Mr. Vanunu was kidnapped in Rome, Italy after revealing details of an Israli covert nuclear program to British media."]
	},

	//October Quotes
	9: {
		1:	["2013", "Americans", "A partial US federal government shutdown occured as a result of political disagreements over operational spending."],
		2:	["1990", "Radio Berlin", "the Internation radio station aired it's final transmision ending with the Doors song, 'The End'."],
		3:	["1849", "Edgar Allan Poe", "American author and poet, Poe, was found delirious in a gutter in Baltimore, Maryland under mysterious circumstances; his last public appearance before his death."],
		4:	["1943", "European children", "German occupiers forade the flying of kites threatening a six month jail sentence for those caught."],
		5:	["1945", "Warner Brothers", "A six month strike by Hollywood set decorators turned into a bloody riot at the gates of Warner Brothers' studios."],
		6:	["1890", "polygamists", "The Mormon Church outlawed polygamy."],
		7:	["2003", "Gray Davis", "Mr. Davis, the Governor of California, was recalled three years before the official end of his term. Arnold Schwarzenegger is elected Governor in his place."],
		8:	["1962", "Der Spiegel", "After publishing an article about a NATO maneuver and the sorry state of the German army, the magazine, Der Spiegel, was accused of treason."],
		9:	["1992", "the Knapp family", "A 13 kilogram meteorite landed in the Knapp residence driveway in Peekskill,New York, destroying the family's 1980 Chevrolet Malibu."],
		10:	["1978", "Aerosmith", "Steven Tyler and Joe Perry were injured by a cherry bomb while performing on stage."],
		11:	["1991", "Jimmy Swaggart", "The maried televangelist was caught soliciting a prostitute for the second time."],
		12:	[""],
		13:	["1988", "Catholics", "The Shroud of Turin, revered by many Christians as Christ's burial cloth, was found by carbon-dating to be a fake from the Middle Ages."],
		14:	["1322", "King Edward II", "Robert the Bruce of Scotland defeated King Edward the II of England at Bayland, forcing Edward to accept Scotland's independence."],
		15:	["1980", "George Brett", "George Brett was forced out of the World Series due to his hemorrhoids."],
		16:	["1984", "this Baboon", "A Baboon heart was succesfully transplanted into a 15-day-old baby girl."],
		17:	["1932", "Al Capone", "The mobster was convicted of tax evasion and sentenced to 11 years in prison."],
		18:	["2012", "Google", "Google stock trading was suspended after a premature release of a quartery report indicating a 20% drop in profits and a 9% fall in share price."],
		19:	["1960", "Martin Luther King Jr.", "During an Atlanta sit-in, Martin Luther King Jr. was arrested."],
		20:	["1963", "Nelson Mandela", "South Africa began its trial of Nelson Mandela for conspiracy."],
		21:	["1978", "Frederick Valentich", "After reporting contact with an unidentified aircraf, Frederick Valentith vanished in a Cessna 182 over the Bass Strait south of Melbourne."],
		22:	["1926", "Harry Houdini", "J. Gordon Whitehead sucker punched the magician, Harry Houdini, in the stomach in Montreal."],
		23:	["1979", "Joseph Cooper", "Billy Martin, manager of the New York Yankees, became involved in a bar-room altercation with Joseph Cooper, a Minnesota marshmallow salesman. Cooper required 15 stitches."],
		24:	["1926", "Harry Houdini", "J. Gordon Whitehead sucker punched the magician, Harry Houdini, in the stomach in Montreal."],
		25:	["1938", "Swing musicians", "The Archbishop of Dubuque, Francis J. L. Beckman, denounced Swing Music for leading young people down the 'path to hell'."],
		26:	["1973", "Richard Nixon", "Prisident Nixon released the first White House tapes on the Watergate scandal."],
		27:	["1838", "Mormons", "Missouri governor, Liburn Boggs, issued the Extermination Order, which orders all Mormons to leave the state or be exterminated."],
		28:	["1988", "Jack McDonald", "Carol Edards sued Pastor Jack McDonald of a Tacoma pentecostal church for seducing her. Jurors awarded her $130,000."],
		29:	["1390", "witches", "The first trial for withcraft occured in Paris."],
		30:	["1938", "US radio listeners", "Orson Welles panicked the USA with a radio broadcast of HG Wells' 'War of the Worlds'."],
		31:	["1517", "Martin Luther", "Martin Luther posted his 95 theses on Wittenberg church; leading to his excomunication and the Protestant Reformation."]
	},

	//November Quotes
	10: {
		1:	["1896", "mothers of teenaged boys", "1st bare-breasted women (Zulu) to appear in National Geographic Magazine."],
		2:	["1914", "fisherman", "1914 - Great Britain declares the entire North Sea a military area: neutral ships will transit it at their own risk."],
		3:	["1883", "Native Americans", "1883 - US Supreme Court decides Native Americans can't be Americans"],
		4:	["1970", "Genie", "1970 - Genie, a 13 year old feral child was found in Los Angeles, California having been locked in her bedroom for most of her life."],
		5:	["1995", "Prime Minister Jean Chrétien", "André Dallaire attempts to assassinate Canadian Prime Minister Jean Chrétien; he is thwarted when the PM's wife locks the door."],
		6:	["1849", "Edgar Allan Poe", "American author and poet, Poe, was found delirious in a gutter in Baltimore, Maryland under mysterious circumstances; his last public appearance before his death."],
		7:	["1943", "European children", "German occupiers forade the flying of kites threatening a six month jail sentence for those caught."],
		8:	["1945", "Warner Brothers", "A six month strike by Hollywood set decorators turned into a bloody riot at the gates of Warner Brothers' studios."],
		9:	["1890", "polygamists", "The Mormon Church outlawed polygamy."],
		10:	["2003", "Gray Davis", "Mr. Davis, the Governor of California, was recalled three years before the official end of his term. Arnold Schwarzenegger is elected Governor in his place."],
		11:	["1988", "Catholics", "The Shroud of Turin, revered by many Christians as Christ's burial cloth, was found by carbon-dating to be a fake from the Middle Ages."],
		12:	["1322", "King Edward II", "Robert the Bruce of Scotland defeated King Edward the II of England at Bayland, forcing Edward to accept Scotland's independence."],
		13:	["1961", "People of Berlin", "Berlin was divided as East Germany sealed off the border between the city's eastern and western sectors in order to halt the flight of refugees."],
		14:	["1901", "S.S. Islander", "hits an iceberg near Alaska and sinks!"],
		15:	["1948", "this unidentified man", " Taman Shud Case: The body of an unidentified man is found in Adelaide, Australia, involving an undetectable poison and a secret code in a very rare book; the case remains unsolved and is 'one of Australia's most profound mysteries'."],
		16:	["1532", "Incan Emperor Atahualpa", "Francisco Pizarro and his men capture Inca Emperor Atahualpa at the Battle of Cajamarca."],
		17:	["1511", "Sir Walter Raleigh", "English explorer, writer and courtier Sir Walter Raleigh goes on trial for treason."],
		18:	["1686", "King Louis XIV and his peasants", "Charles Francois Felix operates on France's King Louis XIV anal fistula after practicing the surgery on several peasants."],
		19:	["1990", "Milli Vanilli", "Pop group Milli Vanilli are stripped of their Grammy Award because the duo did not sing at all on the Girl You Know It's True album. Session musicians had provided all the vocals."],
		20:	["1820", "whalers", "An 80-ton sperm whale attacks the whaling ship, Essex, 2,000 miles from the western coast of South America."],
		21:	["1953", "The British Natural History Museum", "The British Natural History Museum announces that the 'Piltdown Man' skull, initially believed to be one of the most important fossilized hominid skulls ever found, is a hoax."],
		22:	["1987", "these people", "Two Chicago television stations are hijacked by an unknown pirate dressed as Max Headroom."],
		23:	["1993", "Rachel Whiteread", "Rachel Whiteread wins both the £20,000 Turner Prize award for best British modern artist and the £40,000 K Foundation art award for the worst artist of the year."],
		24:	["1971", "passengers on this Northwest Orient Airlines flight", "During a severe thunderstorm over Washington state, a hijacker calling himself Dan Cooper (aka D. B. Cooper) parachutes from a Northwest Orient Airlines plane with $200,000 in ransom money. He has never been found."],
		25:	["1864", "the Confederate Army of Manhattan", "American Civil War: A group of Confederate operatives calling themselves the Confederate Army of Manhattan starts fires in more than 20 locations in an unsuccessful attempt to burn down New York City."],
		26:	["1789", "turkeys", "A national Thanksgiving Day is observed in the United States as recommended by President George Washington and approved by Congress."],
		27:	["1863", "the Ohio Penitentiary guards", "Confederate cavalry leader John Hunt Morgan and several of his men escape the Ohio Penitentiary and return safely to the South."],
		28:	["1972", "Claude Buffet and Roger Bontems", " Last executions in Paris: Claude Buffet and Roger Bontems are guillotined at La Santé Prison. The chief executioner is André Obrecht. (Bontems had been found innocent of murder, but as Buffet's accomplice was condemned to death anyway)"],
		29:	["1961", "this chimpanzee", "Project Mercury: Mercury-Atlas 5 Mission – Enos, a chimpanzee, is launched into space. The spacecraft orbits the Earth twice and splashes down off the coast of Puerto Rico."],
		30:	["1954", "this woman", "In Sylacauga, Alabama, United States, the Hodges Meteorite crashes through a roof and hits a woman taking an afternoon nap in the only documented case of a human being hit by a rock from space."]
	},

	//December Quotes
	11: {
		1:	["1948", "this unidentified man", " Taman Shud Case: The body of an unidentified man is found in Adelaide, Australia, involving an undetectable poison and a secret code in a very rare book; the case remains unsolved and is 'one of Australia's most profound mysteries'."],
		2:	["2001", "Enron employees", "Enron files for Chapter 11 bankruptcy."],
		3:	["1976", "Bob Marley", "An assination attempt was made on Bob Marley. He was shot twice, but plays a concery only two days later."],
		4:	["1980", "Led Zeppelin fans", "The English rock group Led Zeppelin officially disbands, following the death of their drummer, John Bonham."],
		5:	["1952", "Londoners", "A cold fog descends upon London, combining with air pollution and killing at least 12,000 in the weeks and months that follow."],
		6:	["1957", "NASA", "A launchpad explosion of Vanguard TV3 thwarts the first United States attempt to launch a satellite into Earth orbit."],
		7:	["574", "Emperor Justin II", "Emperor Justin II retires due to recurring seizures of insanity. He abdicates the throne in favor of his general Tiberius, proclaiming him Caesar."],
		8:	["1974", "the Greek Monarchy", "A plebiscite results in the abolition of monarchy in Greece."],
		9:	["1953", "GM communists", "General Electric announces that all communist employees will be discharged from the company."],
		10:	["1907", "lab animals", "The worst night of the Brown Dog riots in London, when 1,000 medical students clash with 400 police officers over the existence of a memorial for animals that have been vivisected."],
		11:	["969", "Emperor Nikephoros II Phokas", "Byzantine Emperor Nikephoros II Phokas is assassinated by his wife Theophano and her lover, the later Emperor John I Tzimiskes."],
		12:	["1098", "everyone", "First Crusade: Siege of Ma'arrat al-Numan – Crusaders breach the town's walls and massacre about 20,000 inhabitants. After finding themselves with insufficient food, they reportedly resort to cannibalism."],
		13:	["838", "Emperor Wenzong", "Sweet Dew Incident: Emperor Wenzong of the Tang Dynasty conspires to kill the powerful eunuchs of the Tang court, but the plot is foiled."],
		14:	["1978", "Taiwan", " U.S. President Jimmy Carter announces that the United States will recognize the People's Republic of China and sever diplomatic relations with Taiwan"],
		15:	["2014", "Will Gallop", "Lost in Code Wars to Ryan Huber!"],
		16:	["1978", "Cleveland", "Cleveland, Ohio, becomes the first major American city to default on its financial obligations since the Great Depression."],
		17:	["1538", "Henry VIII", "ope Paul III excommunicates Henry VIII of England."],
		18:	["1901", "sailors on the S.S. Islander", "when their ship hit an iceberg near Alaska and sinks!"],
		19:	["1040", "King Duncan I", "Duncan, King of the Scots is killed in battle against his first cousin and rival Macbeth. The latter succeeds him for the throne."],
		20:	["1988", "New Yorkers", "Mayor Koch vows to wipe out street vendors, panhandlers and windshield washers."],
		21:	["1957", "Alice Roth", "Philadelphia Phillies player, Richie Ashburn fouls a ball that hits Alice Roth twice in the same at bat. The first foul broke her nose, and the second foul hits her while leaving on a stretcher."],
		22:	["1591", "John White", "Governor, John White, of Roanoke Island colony returned from a three year trip to England to find that everyone in his colony, including his daughter and granddaughter, had disappeared."],
		23:	["1995", "Shannon Faulkner","Shannon was the first woman to attend the Citadel military college in Charleston, SC. After four hours of the military indoctrination training, she spent the remainder of the first week in the infirmary before voluntarily resigning. After her departure, the male cadets openly celebrated on the campus"],
		24:	["1619", "these guys", "The first Black slaves were brought to the colony of Jamestown, Virginia by the Dutch."],
		25:	["1841", "peeping Toms", "John Hampton patents venetian blinds."],
		26:	["1911", "security guards at the Louvre", "The Mona Lisa was stolen from the Louvre by Vincenzo Perugia"],
		27:	["2011", "Muammar al-Gaddafi", "The Libyan leader is overthrown after the National Transitional Council forces take control of Bab al-Azizia compound during the 2011 Libyan Civil War."],
		28:	["1961", "justice", "Former Nazi leader Johannes Voster becomes South Africa's minister of justice."],
		29:	["1814", "bibliophiles", "British forces destroyed the Library of Congress containing 3,000 books."],
		30:	["2013", "higher education", "25,000 applicants to the University of Liberia failed their university entrance examination."],
		31:	["1859", "the Earth", "The first successful oil well was drilled. near Titusville, Pennsylvania by Edwin Drake."],
	}
}
