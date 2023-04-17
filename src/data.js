const photos = [
    { src: "fo1", width: 500, height: 600},
    { src: "fo2", width: 500, height: 600},
    { src: "fo3", width: 500, height: 600},
    { src: "fo4", width: 500, height: 600},
    { src: "fo5", width: 500, height: 600},
    { src: "fo6", width: 500, height: 600},
    { src: "fo7", width: 500, height: 600},
    { src: "fo8", width: 500, height: 600},
    { src: "fo9", width: 500, height: 600},
    { src: "london1", width: 500, height: 500},
    { src: "london2", width: 500, height: 500},
    { src: "london3", width: 500, height: 600},
    { src: "london4", width: 500, height: 600},
    { src: "london5", width: 500, height: 600},
    { src: "london6", width: 500, height: 600},
    { src: "london7", width: 500, height: 600},
    { src: "london8", width: 500, height: 600},
    { src: "london9", width: 500, height: 600},
    { src: "london10", width: 500, height: 600},
    { src: "london11", width: 500, height: 500},
    { src: "london12", width: 500, height: 500},
    { src: "london13", width: 500, height: 500},
    { src: "london14", width: 500, height: 500},
    { src: "london15", width: 500, height: 600},
    { src: "london16", width: 500, height: 600},
    { src: "london17", width: 500, height: 600},
    { src: "london18", width: 500, height: 600},
    { src: "london19", width: 500, height: 600},
    { src: "london20", width: 500, height: 600},
    { src: "london21", width: 500, height: 600},
    { src: "london22", width: 500, height: 600},
    { src: "london23", width: 500, height: 500},
    { src: "london24", width: 500, height: 500},
    { src: "london25", width: 500, height: 600},
    { src: "london26", width: 500, height: 500},
    { src: "london27", width: 500, height: 500},
  ];

  const locations = [
    { 
        id:"engagement",
        title: "Engagement",
        time: "1PM",
        address: "Event Hall - Ikeja",
        mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3983202726868!2d3.342454705405006!3d6.597318054554848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9225cd2cb23d%3A0x6a1cf06fcef4c0f0!2sFirst%20Baptist%20Church%20Ikeja!5e0!3m2!1sen!2sng!4v1681227337549!5m2!1sen!2sng",
        info: "Click map to get directions"
    },
    { 
        id:"wedding",
        title: "Wedding",
        time: "10AM",
        address: "First Baptist Church - Ikeja",
        mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3983202726868!2d3.342454705405006!3d6.597318054554848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9225cd2cb23d%3A0x6a1cf06fcef4c0f0!2sFirst%20Baptist%20Church%20Ikeja!5e0!3m2!1sen!2sng!4v1681227337549!5m2!1sen!2sng",
        info: "Click map to get directions"
    },
    { 
        id:"reception",
        title: "Reception",
        time: "1PM",
        address: "Event Hall - Ikeja",
        mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2085722148795!2d3.338462114486971!3d6.6209928952121455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d8243b9def%3A0x56bcc2317ff6d5f6!2sBrava%20Events!5e0!3m2!1sen!2sng!4v1681246337660!5m2!1sen!2sng",
        info: "Click map to get directions"
    },
    { 
        id:"info",
        title: "Other info",
        time: "",
        address: "",
        mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3983202726868!2d3.342454705405006!3d6.597318054554848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9225cd2cb23d%3A0x6a1cf06fcef4c0f0!2sFirst%20Baptist%20Church%20Ikeja!5e0!3m2!1sen!2sng!4v1681227337549!5m2!1sen!2sng" ,
        info: "Click map to get directions"
    },
  ]
  export {photos, locations}
