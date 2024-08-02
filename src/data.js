const data = [
    {
        id:1,
        name:"Agra",
        price:"$35,000",
        Description:"Agra is best known for the Taj Mahal (17th century), designated a UNESCO World Heritage site in 1983. A complex mausoleum, the Taj Mahal is often considered to be the world's best example of Mughal architecture. The Mughal emperor Shah Jahān built it for his favourite wife, Mumtāz Maḥal, in the mid-17th century",
        ima :"https://lh5.googleusercontent.com/p/AF1QipOwcynxRpNebAQYvogATP7Bg7j0k45R21LWYlCN=w810-h468-n-k-no",
    },
    {
        id:2,
        name:"Ahmednagar",
        price:"$45,000",
        Description :"Ahmednagar (officially Ahilya Nagar)[3][4] is a city in, and the headquarters of, the Ahmednagar district, Maharashtra, India, about 120 km (75 mi) northeast of Pune and 114 km (71 mi) from Aurangabad It was one of the Deccan sultanates, which lasted until its conquest by Mughal emperor Shah Jahan in 1636. Aurangzeb, the last Mughal emperor, who spent the latter years of his reign, 1681–1707, in the Deccan, died in Ahmednagar and is buried at Khuldabad, near Aurangabad in 1707, with a small monument marking the site",
        ima :"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQZsCMxR-O7prlelx5HNxwoMu8hK5iua1JMIt8DSotw9UuD61R5UHHNnKyo00CLz4u7aN76g-ieIywf1uKU7kYhV-YlibghNrycDQvojw"
    },
    {
        id:3,
        name:"Pune",
        price:"$30,000",
        Description :"Pune is a sprawling city in the western Indian state of Maharashtra. It was once the base of the Peshwas (prime ministers) of the Maratha Empire, which lasted from 1674 to 1818. It's known for the grand Aga Khan Palace, built in 1892 and now a memorial to Mahatma Gandhi, whose ashes are preserved in the garden. The 8th-century Pataleshwar Cave Temple is dedicated to the Hindu god Shiva",
        ima :`https://lh4.googleusercontent.com/proxy/19bA2_iKYTKrPl2o-UytLPMsyzLeQkLTvyJGWTX9dEf6BEe3nlWnxAeGPGx10lAhOZ5pnJPsiWmpamiJvzuTYbm3NacdZUttp_i4SvOeXpuVK4dsNbg0JhFmgYTiY_0IyanrvH67nhQizv_5b98zjBMWgsk2Jgc=w810-h468-n-k-no`
    },
    {
        id:4,
        name:"Mumbai",
        price:"$60,000",
        Description :"Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.",
        ima : `https://lh3.googleusercontent.com/proxy/BC9LN8m3Qo9MW53c3aLm8FS42OLD7WF2yM57tnd0qS6dZH3zDkKOjnISQIe20nalk4BLK1wpdsKK5U6UsG-4Ztauo-Rv9I2_N4D9KhzKnAZlTBCbHhMTyU1ZuxcWge5Td-s1FFLm74pOueaobbTnXN_Jhp5f958=w810-h468-n-k-no`
    },
    {
        id:5,
        name:"Goa",
        price:"80,000",
        Description :"Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda",
        ima :`https://lh5.googleusercontent.com/p/AF1QipPI-KJH8jWecrgce0ItKscubeoCH7Lghtl5yPLG=w810-h468-n-k-no`
    },
    {
        id:6,
        name:"Nashik",
        price:"$40,000",
        Description :"Nashik is an ancient holy city in Maharashtra, a state in western India. It’s known for its links to the “Ramayana” epic poem. On the Godavari River is Panchavati, a temple complex. Nearby, Lord Rama was thought to have bathed at Ram Kund water tank, today attended by Hindu devotees. Shri Kalaram Sansthan Mandir is an ancient shrine to Rama, while Rama and Sita are said to have worshipped at Sita Gufaa caves. ",
        ima :`https://lh5.googleusercontent.com/p/AF1QipOXp0oq_LQcOZfrfX8_XTc38IM7g--ueazXthIB=w810-h468-n-k-no`
    },
    {
        id:7,
        name:"Nagpur",
        price:"$6000",
        Description :"Nagpur is a large city in the central Indian state of Maharashtra. The 19th-century Nagpur Central Museum displays items found locally, including fossils, sarcophagi and Mughal weaponry. The Raman Science Centre has hands-on exhibits and a planetarium. Sitabuldi Fort, in the Sitabuldi Hills, was the site of an 1817 battle. To the southwest, the immense, domed Deekshabhoomi is a Buddhist monument and pilgrimage site.",
        ima :`https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQLrrIlFjZN_D8m_LtuVV4Nbd-tbo4219K4I7cDndkHM77erqFfX-0TK7ov_lqMkz8xfkJkd_4aC-1DezM3Kt3wpsB1T8_9mSLTdWbradE`
    },
    {
        id:8,
        name:"Amravati",
        price:"$40,000",
        Description :"Amravati is a city in Maharashtra located in the Vidarbha region. It is the ninth largest city in Maharashtra, India & second largest city in the Vidarbha region in terms of population In 1956, Amravati district became part of Bombay State and after its bifurcation in 1960, it became part of Maharashtra state.Hinduism is majority religion in Amravati city with 61.83 % followers. Islam is second most popular religion in city of Amravati with approximately 23.73 % following it.",
        ima :`https://lh5.googleusercontent.com/p/AF1QipObP7tN01eYdvvKg7K8c2246CNYthe3idXBzz2W=w810-h468-n-k-no`
    },
    {
        id:9,
        name:"Aurangabad",
        price:"$30,000",
        Description :"Aurangabad is a city in Maharashtra state, in India. It’s known for the 17th-century marble Bibi ka Maqbara shrine, styled on the Taj Mahal. The nearby Shivaji Maharaj Museum, dedicated to the Maratha king Shivaji, displays war weapons and a coin collection. North of the city, the Aurangabad Caves comprise ancient, rock-cut Buddhist shrines. West of the city, battlements surround the medieval Daulatabad Fort",
        ima :`https://upload.wikimedia.org/wikipedia/commons/6/65/Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg`
    },
    {
        id:10,
        name:"Surat",
        price:"$25,000",
        Description :"Surat is a large city beside the Tapi River in the west Indian state of Gujarat. Once known for silk weaving, Surat remains a commercial center for textiles, and the New Textile Market area is lined with fabric shops. Overlooking the river, Surat Castle was built in the 1500s to defend the city against Portuguese colonists. Nearby, the Dutch, Armenian and English cemeteries contain elaborate colonial-era tombs.",
        ima:`https://lh5.googleusercontent.com/p/AF1QipP8YNFdCndnweuoXChzMV7VkGPCHSJf5cFMkdPj=w810-h468-n-k-no`
    }
]

export default data;