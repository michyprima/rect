(c, g, l, m, e)
{
    c = Math.floor(c / 20);
    var f = document.createElement("canvas"), h = c * 16;
    var w = h * 2.25;
    f.width = w;
    f.height = h;
    var a = f.getContext("2d");
    e = e.join();
    a.lineWidth = c;
    a.strokeStyle = "rgb(" + e + ")";
    m && (a.strokeStyle = "#FF3B30");
    l && (a.strokeStyle = "#4CD964");
    a.fillStyle = a.strokeStyle;

    a.moveTo(0,0);
    if(g >= 25) {
        a.lineTo(w, 0);
        a.stroke();

        a.moveTo(w,0);
        if(g >= 50) {
            a.lineTo(w, h);
            a.stroke();

            a.moveTo(w, h);
            if(g >= 75) {
                a.lineTo(0, h);
                a.stroke();

                a.moveTo(0, h);
                if(g >= 100) {
                    a.lineTo(0, 0);
                    a.stroke();
                } else {
                    a.lineTo(0, h - (h / 25 * (g - 75)));
                    a.stroke();
                }
            } else {
                a.lineTo(w-(w / 25 * (g - 50)), h);
                a.stroke();
            }
        } else {
            a.lineTo(w, h / 25 * (g - 25));
            a.stroke();
        }
    } else {
        a.lineTo(w/25*g, 0);
        a.stroke();
    }

    a.font = Math.floor(h*0.8) + "px Helvetica Neue";
    a.textAlign = "center";
    a.textBaseline = "middle";
    a.fillText(g + "%", w/2, h/2);
    return f.toDataURL("image/png")
}