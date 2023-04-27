  const photos = [
    {key:"p1", alt:"couple photo", src: "fo1", width: 1113, height: 1391},
    {key:"p2", alt:"couple photo", src: "fo2", width: 1040, height: 1300},
    {key:"p3", alt:"couple photo", src: "fo3", width: 819, height: 1024},
    {key:"p4", alt:"couple photo", src: "fo4", width: 819, height: 1024},
    {key:"p5", alt:"couple photo", src: "fo5", width: 819, height: 1024},
    {key:"p6", alt:"couple photo", src: "fo6", width: 819, height: 1024},
    {key:"p7", alt:"couple photo", src: "fo7", width: 819, height: 1024},
    {key:"p8", alt:"couple photo", src: "fo8", width: 819, height: 1024},
    {key:"p9", alt:"couple photo", src: "fo9", width: 819, height: 1024},
    {key:"p10", alt:"", src: "london1", width: 1536, height: 2048},
    {key:"p11", alt:"", src: "london2", width: 1200, height: 1600},
    {key:"p12", alt:"", src: "london3", width: 1200, height: 1600},
    {key:"p13", alt:"", src: "london4", width: 1200, height: 1600},
    {key:"p14", alt:"", src: "london5", width: 1200, height: 1600},
    {key:"p15", alt:"", src: "london6", width: 1536, height: 2048},
    {key:"p16", alt:"", src: "london7", width: 1536, height: 2048},
    {key:"p17", alt:"", src: "london8", width: 1536, height: 2048},
    {key:"p18", alt:"", src: "london9", width: 1536, height: 2048},
    {key:"p19", alt:"", src: "london10", width: 1536, height: 2048},
    {key:"p20", alt:"", src: "london11", width: 1536, height: 2048},
    {key:"p21", alt:"", src: "london12", width: 1536, height: 2048},
    {key:"p22", alt:"", src: "london13", width: 1536, height: 2048},
    {key:"p23", alt:"", src: "london14", width: 1536, height: 2048},
    {key:"p24", alt:"", src: "london15", width: 1536, height: 2048},
    {key:"p25", alt:"", src: "london16", width: 1536, height: 2048},
    {key:"p26", alt:"", src: "london17", width: 1200, height: 1600},
    {key:"p27", alt:"", src: "london18", width: 1536, height: 2048},
    {key:"p28", alt:"", src: "london19", width: 1200, height: 1600},
    {key:"p29", alt:"", src: "london20", width: 1200, height: 1600},
    {key:"p30", alt:"", src: "london21", width: 1200, height: 1600},
    {key:"p31", alt:"", src: "london22", width: 1200, height: 1600},
    {key:"p32", alt:"", src: "london23", width: 1200, height: 1600},
    {key:"p33", alt:"", src: "london24", width: 1200, height: 1600},
    {key:"p34", alt:"", src: "london25", width: 1200, height: 1600},
    {key:"p35", alt:"", src: "london26", width: 1200, height: 1600},
    {key:"p36", alt:"", src: "london27", width: 1200, height: 1600},
  ];

  const locations = [
    { 
        id:"engagement",
        title: "Engagement",
        time: "12:00PM",
        date: "Thursday, 11th May 2023",
        address: "The Event Place - Plot 1, Block B Hakeem Balogun Street, Off Cadbury, Agidingbi Road Lagos, Agidingbi",
        link: "https://goo.gl/maps/v6x6NVa5Etv5h28h9",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3983202726868!2d3.342454705405006!3d6.597318054554848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9225cd2cb23d%3A0x6a1cf06fcef4c0f0!2sFirst%20Baptist%20Church%20Ikeja!5e0!3m2!1sen!2sng!4v1681227337549!5m2!1sen!2sng",
        info: "Click here to get directions",
        image: "event1"
        
      },
      { 
        id:"wedding",
        title: "Wedding",
        time: "10:00AM",
        date: "Saturday, 13th May 2023",
        address: "First Baptist Church. 1 Church St, Olowu St, Ikeja",
        link: "https://goo.gl/maps/GHNZJ7dkv81yFyAb7",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3983202726868!2d3.342454705405006!3d6.597318054554848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9225cd2cb23d%3A0x6a1cf06fcef4c0f0!2sFirst%20Baptist%20Church%20Ikeja!5e0!3m2!1sen!2sng!4v1681227337549!5m2!1sen!2sng",
        info: "Click here to get directions",
        image: "event2"
      },
      { 
        id:"reception",
        title: "Reception",
        time: "13:00PM",
        date: "Saturday, 13th May 2023",
        address: "Brava Events. Industries Road, Guinness Road, Lagos",
        link: "https://goo.gl/maps/anDdMhFWmFFyQ7zJ8",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2085722148795!2d3.338462114486971!3d6.6209928952121455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d8243b9def%3A0x56bcc2317ff6d5f6!2sBrava%20Events!5e0!3m2!1sen!2sng!4v1681246337660!5m2!1sen!2sng",
        info: "Click here to get directions",
        image: "event3"
      },
  ]

  const programs = [
    {
      id: "Engagement",
      pages: 7,
    },
    {
      id: "Wedding",
      pages: 6,
    },
    {
      id: "Reception",
      pages: 2,
    },
  ]
  
  export {photos, locations, programs}
