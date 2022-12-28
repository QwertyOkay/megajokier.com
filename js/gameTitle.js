let activeAlert = false;
    const title = "Megajokier.com";
    const msg = "Play for free social game";
    const changeTitle = setInterval(() => {
      document.title = activeAlert ? title : msg;
      activeAlert = !activeAlert;
    }, 2500);