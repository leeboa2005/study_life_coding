const Links = {
    setColor: function (color) {
        $('a').css('color', color);
    }
}
const Body = {
    setColor: function (color) {
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self) {
    let target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('gold');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}