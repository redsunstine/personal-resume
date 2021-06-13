function Fly(behaviour) {
    this.initFly(behaviour);
}
Fly.prototype = {
    wings: 'c',
    speed: 50,
    wingSpeed: 50,
    angle: 0,
    x: 0,
    y: 0,
    size: 60,
    isMoving: false,
    interval: null,
    img: null,
    smashed: false,

    initFly: function (behaviour) {
        if (!window.Flies) Flies = new Array();
        this.index = Flies.length;
        Flies[this.index] = this;
        if (behaviour) {
            this.Behaviour = behaviour;
            behaviour.SetFly(this);
        } else
            this.Behaviour = new DefaultFlyBehaviour(this);
        this.GetImage();
        this.SetPosition(Math.random() * this.maxWidth(), Math.random() * this.maxHeight());
        this.SetAngle(Math.random() * 360);
        this.Refresh();
    },

    IsMoving: function () { return this.isMoving; },
    SetMoving: function (val) {
        this.isMoving = val;
        if (this.interval != null) clearInterval(this.interval);
        var self = this;
        if (val) {
            this.interval = setInterval(function () { self.MoveIt(); }, this.wingSpeed);
        } else {
            this.CloseWings();
        }
    },
    SetSize: function (size) {
        this.size = size;
        this.Refresh();
    },
    MoveIt: function () {
        switch (this.wings) {
            case 'c':
                this.OpenWings();
                break;
            case 'o':
                this.CloseWings();
                break;
        }
        this.SetPosition(this.x + Math.cos(this.angle * Math.PI / 180) * 1500 / this.speed, this.y + Math.sin(this.angle * Math.PI / 180) * 1500 / this.speed);
        if (this.Behaviour && this.Behaviour.Behave)
            this.Behaviour.Behave();
    },
    OpenWings: function () {
        this.wings = 'o';
        this.Refresh();
    },
    CloseWings: function () {
        this.wings = 'c';
        this.Refresh();
    },
    GetImageName: function (index) {
        if (index == null) {
            imageAngle = Math.round(this.angle / 45.0) * 45;
            while (imageAngle >= 360) imageAngle -= 360;
            var imageName = this.wings + imageAngle;
        } else {
            var imageName = index;
        }
        switch (imageName) {
            case 'c0':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/Rlm3LTjHqPI/AAAAAAAAAE8/N-TMYI5KAPM/s400/c0.gif'
                break;
            case 'c45':
                imageName =
                    'http://1.bp.blogspot.com/_6GyQjwWOmQA/Rlm3wjjHqQI/AAAAAAAAAFE/rqi3_0J6MMA/s400/c45.gif'
                break;
            case 'c90':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Rlm37zjHqRI/AAAAAAAAAFM/TJHTolQXCzA/s400/c90.gif'
                break;
            case 'c135':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Rlm4FzjHqSI/AAAAAAAAAFU/fOeLko03HgM/s400/c135.gif'
                break;
            case 'c180':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Rlm4QzjHqTI/AAAAAAAAAFc/DFxrFkZF8_8/s400/c180.gif'
                break;
            case 'c225':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Rlm4kzjHqUI/AAAAAAAAAFk/Fr9GqQB_YnA/s400/c225.gif'
                break;
            case 'c270':
                imageName =
                    'http://1.bp.blogspot.com/_6GyQjwWOmQA/Rlm4vjjHqVI/AAAAAAAAAFs/XXJjb8suHSw/s400/c270.gif'
                break;
            case 'c315':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Rlm46zjHqWI/AAAAAAAAAF0/CrCjDpSrDTs/s400/c315.gif'
                break;
            case 'o0':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/Rlm5FTjHqXI/AAAAAAAAAF8/ZCMq80HNoHM/s400/o0.gif'
                break;
            case 'o45':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/Rlm5PTjHqYI/AAAAAAAAAGE/wJVsgAC5Tzk/s400/o45.gif'
                break;
            case 'o90':
                imageName =
                    'http://3.bp.blogspot.com/_6GyQjwWOmQA/Rlm5YDjHqZI/AAAAAAAAAGM/5eqN6CVYXVc/s400/o90.gif'
                break;
            case 'o135':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Rlm5mzjHqaI/AAAAAAAAAGU/CjDKSrg9GtI/s400/o135.gif'
                break;
            case 'o180':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/Rlm5wTjHqbI/AAAAAAAAAGc/Nir8gvXq09M/s400/o180.gif'
                break;
            case 'o225':
                imageName =
                    'http://3.bp.blogspot.com/_6GyQjwWOmQA/Rlm56DjHqcI/AAAAAAAAAGk/zZmoUGZZvSQ/s400/o225.gif'
                break;
            case 'o270':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Rlm6DzjHqdI/AAAAAAAAAGs/SUewvqZUHWs/s400/o270.gif'
                break;
            case 'o315':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Rlm64zjHqeI/AAAAAAAAAG0/z7i_0jxCAzs/s400/o315.gif'
                break;
            case 'smashed':
                imageName =
                    'http://4.bp.blogspot.com/-V1RZzFVKKLU/TVdA7COW-VI/AAAAAAAAAmk/ZrBGpHgm6Z8/s400/smashedFly.gif'
                break;
        }
        return imageName;
    },
    CreateImage: function (name) {
        if (!window.dynamicContainer) {
            var dc = document.createElement('div');
            dc.id = 'dynamicContainer';
            document.body.appendChild(dc);
            window.dynamicContainer = dc;
        }
        var img = document.createElement('img');
        img.fly = this;
        img.src = this.GetImageName(name);
        img.style.position = 'absolute';
        img.style.display = 'none';
        img.onmouseover = function () { this.fly.OnMouseOver(); };
        img.onmousedown = function () { this.fly.OnClick(); };
        img.onselectstart = function () { return false; };
        img.ondragstart = function () { return false; };
        img.selectable = false;
        img.title = "I know what the disease wants";
        window.dynamicContainer.appendChild(img);
        this.images[name] = img;
    },
    GetImage: function () {
        if (!this.images) {
            this.images = new Array();
            for (var a = 0; a < 360; a += 45) this.CreateImage('c' + a);
            for (var a = 0; a < 360; a += 45) this.CreateImage('o' + a);
            this.CreateImage('smashed');
        }
        if (this.smashed) {
            var imageName = 'smashed';
        } else {
            var imageAngle = Math.round(this.angle / 45.0) * 45;
            while (imageAngle >= 360) imageAngle -= 360;
            var imageName = this.wings + imageAngle;
        }
        this.img = this.images[imageName];
    },
    Dispose: function () {
        this.SetMoving(false);
        if (this.images) {
            for (var k in this.images) {
                if (this.images.hasOwnProperty(k)) {
                    window.dynamicContainer.removeChild(this.images[k]);
                }
            }
        }
        delete this.images;
        delete Flies[this.index];
    },
    Refresh: function () {
        var oldImg = this.img;
        this.GetImage();
        this.img.style.left = this.x + 'px';
        this.img.style.top = this.y + 'px';
        this.img.style.width = this.size + 'px';
        this.img.style.height = this.size + 'px';
        if (oldImg && this.img != oldImg) oldImg.style.display = 'none';
        if (this.img.style.display == 'none') this.img.style.display = '';

    },
    SetAngle: function (val) {
        this.angle = parseInt(val);
        while (this.angle < 0) this.angle += 360;
        while (this.angle >= 360) this.angle -= 360;
        this.Refresh();
    },
    SetSpeed: function (val) {
        this.speed = parseInt(val);
        this.Refresh();
    },
    maxHeight: function () {
        if (!this._maxHeight) {
            var h = 0;
            if (window.document.innerHeight > h) h = window.document.innerHeight;
            if (window.document.documentElement.clientHeight > h) h = window.document.documentElement.clientHeight;
            if (window.document.body.clientHeight > h) h = window.document.body.clientHeight;
            //return h;
            this._maxHeight = h;
        }
        return this._maxHeight;
    },
    maxWidth: function () {
        if (!this._maxWidth) {
            var w = 0;
            if (window.document.innerWidth > w) w = window.document.innerWidth;
            if (window.document.documentElement.clientWidth > w) w = window.document.documentElement.clientWidth;
            if (window.document.body.clientWidth > w) w = window.document.body.clientWidth;
            this._maxWidth = w;
            //return w;
        }
        return this._maxWidth;
    },
    SetPosition: function (x, y) {
        var horizontal_overflow = 0;
        var vertical_overflow = 0;
        this.x = parseInt(x);
        this.y = parseInt(y);
        if (this.x < 0) {
            this.x = 0;
            horizontal_overflow = -1;
        }
        if (this.y < 0) {
            this.y = 0;
            vertical_overflow = -1;
        }
        if (this.img && !this._clientWidth) this._clientWidth = this.img.clientWidth;
        if (this.img && (this.x >= this.maxWidth() - this._clientWidth)) {
            this.x = this.maxWidth() - this._clientWidth - 1;
            horizontal_overflow = 1;
        }
        if (this.img && !this._clientHeight) this._clientHeight = this.img.clientHeight;
        if (this.img && (this.y >= this.maxHeight() - this._clientHeight)) {
            this.y = this.maxHeight() - this._clientHeight - 1;
            vertical_overflow = 1;
        }
        if (this.Behaviour && this.Behaviour.OnHit)
            this.Behaviour.OnHit(horizontal_overflow, vertical_overflow);
        this.Refresh();
    },
    OnMouseOver: function () {
        if (this.Behaviour && this.Behaviour.OnMouseOver)
            this.Behaviour.OnMouseOver();
    },
    OnClick: function () {
        if (this.Behaviour && this.Behaviour.OnClick)
            this.Behaviour.OnClick();
    }
}

function DefaultFlyBehaviour(fly) {
    this.initBehaviour(fly);
}
DefaultFlyBehaviour.prototype = {
    fly: null,
    bothered: 0,
    initBehaviour: function (fly) {
        this.SetFly(fly);
    },
    SetFly: function (fly) {
        this.fly = fly;
    },
    Behave: function () {
        if (!this.fly) return;
        if (this.fly.smashed) {
            this.fly.SetMoving(false);
            return;
        }
        if (this.bothered > 0) this.bothered--;
        else this.fly.SetMoving(false);
        if (Math.random() * 15 < 2) this.TurnRandomly();
    },
    TurnRandomly: function () {
        if (!this.fly) return;
        if (!this.lastTurn || Math.random() * 3 > 2) this.lastTurn =
            Math.round(Math.random() * 20 + 35) * (parseInt(Math.random() * 2) * 2 - 1);
        this.fly.SetAngle(this.fly.angle + this.lastTurn);
    },
    OnHit: function (ho, vo) {
        if (!this.fly) return;
        switch (ho) {
            case -1:
                if (this.fly.angle > 90 && this.fly.angle < 270) this.TurnRandomly();
                break;
            case 1:
                if (this.fly.angle < 90 || this.fly.angle > 270) this.TurnRandomly();
                break;
        }
        switch (vo) {
            case -1:
                if (this.fly.angle > 180) this.TurnRandomly();
                break;
            case 1:
                if (this.fly.angle > 0 && this.fly.angle < 180) this.TurnRandomly();
                break;
        }
    },
    OnMouseOver: function () {
        if (this.fly.smashed) return;
        this.bothered += 50;
        this.fly.SetMoving(true);
    },
    OnClick: function () {
        this.fly.smashed = true;
        this.fly.SetMoving(false);
    }
}

function SexualFlyBehaviour(fly) {
    this.initBehaviour(fly);
}
var sfb = new DefaultFlyBehaviour();
sfb.DefaultOnHit = sfb.OnHit;
sfb.OnHit = function (ho, vo) {
    this.DefaultOnHit(ho, vo);
    if ((Flies.length > 1) && (ho == 0) && (vo == 0)) {
        if (!this.mate && (Math.random() * 100 < 1))
            this.FindMate();
        if (this.mate) {
            var dy = this.mate.y - this.fly.y;
            var dx = this.mate.x - this.fly.x;
            if (Math.random() * 100 < 3) {
                var ang = Math.atan2(dy, dx);
                this.fly.SetAngle(180 / Math.PI * ang);
            }
            if (dx * dx + dy * dy < this.fly.size * this.mate.size)
                this.Mate();
            if (Math.random() * 100 < 2) this.FindMate();
            if (Math.random() * 1000 < 8) this.mate = null;
        }
    }
}
sfb.FindMate = function () {
    this.mate = null;
    while (!this.mate || (this.mate.index == this.fly.index))
        this.mate = Flies[Math.floor(Math.random() * Flies.length)];
}
sfb.Mate = function () {
    if (!Flies.MaxFlies) Flies.MaxFlies = 10;
    if (Flies.length >= Flies.MaxFlies) return;
    var f = new Fly(new SexualFlyBehaviour());
    f.x = (this.fly.x + this.mate.x) / 2;
    f.y = (this.fly.y + this.mate.y) / 2;
    f.speed = (this.fly.speed + this.mate.speed) / 2;
    f.Behaviour.bothered = 100;
    f.SetMoving(true);
    f.SetSize((this.fly.size + this.mate.size) / 2);
    this.mate = null;
}
SexualFlyBehaviour.prototype = sfb;

function Neko(behaviour) {
    this.initNeko(behaviour);
}
Neko.prototype = {
    state: 'c',
    speed: 50,
    legSpeed: 50,
    angle: 0,
    x: 0,
    y: 0,
    size: 60,
    isMoving: false,
    interval: null,
    img: null,

    initNeko: function (behaviour) {
        if (!window.Nekos) Nekos = new Array();
        this.index = Nekos.length;
        Nekos[this.index] = this;
        if (behaviour) {
            this.Behaviour = behaviour;
            behaviour.SetNeko(this);
        } else
            this.Behaviour = new DefaultNekoBehaviour(this);
        this.GetImage();
        this.SetPosition(Math.random() * this.maxWidth(), Math.random() * this.maxHeight());
        this.SetAngle(Math.random() * 360);
        this.Refresh();
    },
    IsMoving: function () { return this.isMoving; },
    SetMoving: function (val) {
        this.isMoving = val;
        if (this.interval != null) clearInterval(this.interval);
        var self = this;
        if (val) this.interval = setInterval(function () { self.MoveIt(); }, this.legSpeed);
        else this.CloseLegs();
    },
    SetSize: function (size) {
        this.size = size;
        this.Refresh();
    },
    MoveIt: function () {
        switch (this.state) {
            case 'a':
            case 'y':
            case 'st':
            case 'sc1':
            case 'sc2':
            case 'sc3':
            case 'sl1':
            case 'sl2':
                this.Refresh();
                break;
            case 'c':
                this.OpenLegs();
                this.SetPosition(this.x + Math.cos(this.angle * Math.PI / 180) * 1500 / this.speed, this.y + Math.sin(this.angle * Math.PI / 180) * 1500 / this.speed);
                break;
            case 'o':
                this.CloseLegs();
                this.SetPosition(this.x + Math.cos(this.angle * Math.PI / 180) * 1500 / this.speed, this.y + Math.sin(this.angle * Math.PI / 180) * 1500 / this.speed);
                break;
        }
        if (this.Behaviour && this.Behaviour.Behave)
            this.Behaviour.Behave();
    },
    Sleep: function (x) {
        this.state = 'sl' + x;
    },
    WakeUp: function () {
        this.state = 'a';
    },
    Yawn: function () {
        this.state = 'y';
    },
    Scratch: function (x) {
        this.state = 'sc' + x;
    },
    Sit: function () {
        this.state = 'st';
    },
    EnsureRunning: function () {
        switch (this.state) {
            case 'o':
            case 'c':
                break;
            default:
                this.OpenLegs();
                break;
        }
    },
    OpenLegs: function () {
        this.state = 'o';
        this.Refresh();
    },
    CloseLegs: function () {
        this.state = 'c';
        this.Refresh();
    },
    GetImageName: function (index) {
        if (index == null) {
            imageAngle = Math.round(this.angle / 45.0) * 45;
            while (imageAngle >= 360) imageAngle -= 360;
            var imageName = this.state + imageAngle;
        } else {
            var imageName = index;
        }
        switch (imageName) {
            case 'scratch1':
                imageName =
                    'http://1.bp.blogspot.com/_6GyQjwWOmQA/Sbvqllr5BSI/AAAAAAAAAbk/gVBWESHccCg/s400/Icon_26.ico.gif'
                break;
            case 'scratch2':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Sbvqlx1BgVI/AAAAAAAAAbs/j_9Fi2ZBv7s/s400/Icon_27.ico.gif'
                break;
            case 'scratch3':
                imageName =
                    'http://3.bp.blogspot.com/_6GyQjwWOmQA/Sbvql3SCWhI/AAAAAAAAAb0/58hFhw80q34/s400/Icon_28.ico.gif'
                break;
            case 'sit':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/SbvqmKxsc1I/AAAAAAAAAb8/rCOgEZbADkQ/s400/Icon_29.ico.gif'
                break;
            case 'awake':
                imageName =
                    'http://3.bp.blogspot.com/_6GyQjwWOmQA/SbvpqBF5FLI/AAAAAAAAAYc/wImwyuTrcuc/s400/Icon_1.ico.gif'
                break;
            case 'yawn':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/SbvqmL5gmXI/AAAAAAAAAcE/zi9ZEt1YDjE/s400/Icon_30.ico.gif'
                break;
            case 'sleep1':
                imageName =
                    'http://1.bp.blogspot.com/_6GyQjwWOmQA/Sbvqr8UsHeI/AAAAAAAAAcM/7nQh5flDbTM/s400/Icon_31.ico.gif'
                break;
            case 'sleep2':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Sbvqr1Ip3QI/AAAAAAAAAcU/YfwaThfZAEI/s400/Icon_32.ico.gif'
                break;
            case 'stopped':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/SbvqmKxsc1I/AAAAAAAAAb8/rCOgEZbADkQ/s400/Icon_29.ico.gif'
                break;
            case 'c0':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Sbvp486d0BI/AAAAAAAAAZE/uH4vJtaEmCk/s400/Icon_6.ico.gif'
                break;
            case 'c45':
                imageName =
                    'http://3.bp.blogspot.com/_6GyQjwWOmQA/Sbvp5Er9JSI/AAAAAAAAAZU/PB16_J04R2Q/s400/Icon_8.ico.gif'
                break;
            case 'c90':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Sbvp5LagyZI/AAAAAAAAAZk/r2i00gd__xI/s400/Icon_10.ico.gif'
                break;
            case 'c135':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/Sbvp_ULfSNI/AAAAAAAAAZ0/1-33fv9Nkk0/s400/Icon_12.ico.gif'
                break;
            case 'c180':
                imageName =
                    'http://3.bp.blogspot.com/_6GyQjwWOmQA/Sbvp_WtQt1I/AAAAAAAAAaE/b-yL92DOIZE/s400/Icon_14.ico.gif'
                break;
            case 'c225':
                imageName =
                    'http://2.bp.blogspot.com/_6GyQjwWOmQA/SbvqJbz3i4I/AAAAAAAAAaU/KftS95UwUSA/s400/Icon_16.ico.gif'
                break;
            case 'c270':
                imageName =
                    'http://3.bp.blogspot.com/_6GyQjwWOmQA/SbvpqEdlfTI/AAAAAAAAAYk/PT-nKAcHGKY/s400/Icon_2.ico.gif'
                break;
            case 'c315':
                imageName =
                    'http://1.bp.blogspot.com/_6GyQjwWOmQA/Sbvpqd7SANI/AAAAAAAAAY0/tMmi1gtJOh0/s400/Icon_4.ico.gif'
                break;
            case 'o0':
                imageName =
                    'http://1.bp.blogspot.com/_6GyQjwWOmQA/Sbvp5IVPt5I/AAAAAAAAAZM/s1QGNqaVxlA/s400/Icon_7.ico.gif'
                break;
            case 'o45':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/Sbvp5L9OkEI/AAAAAAAAAZc/azcJ5qXRv18/s400/Icon_9.ico.gif'
                break;
            case 'o90':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/Sbvp_BP2xNI/AAAAAAAAAZs/OJeT50LmkOY/s400/Icon_11.ico.gif'
                break;
            case 'o135':
                imageName =
                    'http://1.bp.blogspot.com/_6GyQjwWOmQA/Sbvp_YReijI/AAAAAAAAAZ8/abAg5q1MkP4/s400/Icon_13.ico.gif'
                break;
            case 'o180':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/Sbvp_S1JVOI/AAAAAAAAAaM/oLpyJze-ST4/s400/Icon_15.ico.gif'
                break;
            case 'o225':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/SbvqJeHJiuI/AAAAAAAAAac/OK-7l0ajB7M/s400/Icon_17.ico.gif'
                break;
            case 'o270':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/SbvpqN5WvQI/AAAAAAAAAYs/wLnI1lN8Z3M/s400/Icon_3.ico.gif'
                break;
            case 'o315':
                imageName =
                    'http://4.bp.blogspot.com/_6GyQjwWOmQA/SbvpqaTtTNI/AAAAAAAAAY8/iLSq_LWCLT8/s400/Icon_5.ico.gif'
                break;
        }
        return imageName;
    },
    CreateImage: function (name) {
        if (!window.dynamicContainer) {
            var dc = document.createElement('div');
            dc.id = 'dynamicContainer';
            document.body.appendChild(dc);
            window.dynamicContainer = dc;
        }
        var img = document.createElement('img');
        img.neko = this;
        img.src = this.GetImageName(name);
        img.style.position = 'absolute';
        img.style.display = 'none';
        img.onmouseover = function () { this.neko.OnMouseOver(); };
        img.onclick = function () { this.neko.OnClick(); };
        img.title = 'Most everyone\'s mad here.';
        window.dynamicContainer.appendChild(img);
        this.images[name] = img;
    },
    GetImage: function () {
        if (!this.images) {
            this.images = new Array();
            for (var a = 0; a < 360; a += 45) this.CreateImage('c' + a);
            for (var a = 0; a < 360; a += 45) this.CreateImage('o' + a);
            this.CreateImage('awake');
            this.CreateImage('stopped');
            this.CreateImage('scratch1');
            this.CreateImage('scratch2');
            this.CreateImage('scratch3');
            this.CreateImage('sit');
            this.CreateImage('yawn');
            this.CreateImage('sleep1');
            this.CreateImage('sleep2');
        }
        var imageName;
        switch (this.state) {
            case 'a':
                imageName = 'awake';
                break;
            case 'y':
                imageName = 'yawn';
                break;
            case 'st':
                imageName = 'sit';
                break;
            case 'sc1':
                imageName = 'scratch1';
                break;
            case 'sc2':
                imageName = 'scratch2';
                break;
            case 'sc3':
                imageName = 'scratch3';
                break;
            case 'sl1':
                imageName = 'sleep1';
                break;
            case 'sl2':
                imageName = 'sleep2';
                break;
            default:
                if (this.IsMoving()) {
                    var imageAngle = Math.round(this.angle / 45.0) * 45;
                    while (imageAngle >= 360) imageAngle -= 360;
                    imageName = this.state + imageAngle;
                } else {
                    imageName = 'sleep1';
                }
                break;
        }
        this.img = this.images[imageName];
    },
    Dispose: function () {
        this.SetMoving(false);
        if (this.images) {
            for (var k in this.images) {
                if (this.images.hasOwnProperty(k)) {
                    window.dynamicContainer.removeChild(this.images[k]);
                }
            }
        }
        delete this.images;
        delete Nekos[this.index];
    },
    Refresh: function () {
        var oldImg = this.img;
        this.GetImage();
        this.img.style.left = this.x + 'px';
        this.img.style.top = this.y + 'px';
        this.img.style.width = this.size + 'px';
        this.img.style.height = this.size + 'px';
        if (oldImg && this.img != oldImg) oldImg.style.display = 'none';
        if (this.img.style.display == 'none') this.img.style.display = '';
    },
    SetAngle: function (val) {
        this.angle = parseInt(val);
        while (this.angle < 0) this.angle += 360;
        while (this.angle >= 360) this.angle -= 360;
        this.Refresh();
    },
    SetSpeed: function (val) {
        this.speed = parseInt(val);
        this.Refresh();
    },
    maxHeight: function () {
        if (!this._maxHeight) {
            var h = 0;
            if (window.document.innerHeight > h) h = window.document.innerHeight;
            if (window.document.documentElement.clientHeight > h) h = window.document.documentElement.clientHeight;
            if (window.document.body.clientHeight > h) h = window.document.body.clientHeight;
            //return h;
            this._maxHeight = h;
        }
        return this._maxHeight;
    },
    maxWidth: function () {
        if (!this._maxWidth) {
            var w = 0;
            if (window.document.innerWidth > w) w = window.document.innerWidth;
            if (window.document.documentElement.clientWidth > w) w = window.document.documentElement.clientWidth;
            if (window.document.body.clientWidth > w) w = window.document.body.clientWidth;
            this._maxWidth = w;
            //return w;
        }
        return this._maxWidth;
    },
    SetPosition: function (x, y) {
        var horizontal_overflow = 0;
        var vertical_overflow = 0;
        this.x = parseInt(x);
        this.y = parseInt(y);
        if (this.x < 0) {
            this.x = 0;
            horizontal_overflow = -1;
        }
        if (this.y < 0) {
            this.y = 0;
            vertical_overflow = -1;
        }
        if (this.img && !this._clientWidth) this._clientWidth = this.img.clientWidth;
        if (this.img && (this.x >= this.maxWidth() - this._clientWidth)) {
            this.x = this.maxWidth() - this._clientWidth - 1;
            horizontal_overflow = 1;
        }
        if (this.img && !this._clientHeight) this._clientHeight = this.img.clientHeight;
        if (this.img && (this.y >= this.maxHeight() - this._clientHeight)) {
            this.y = this.maxHeight() - this._clientHeight - 1;
            vertical_overflow = 1;
        }
        if (this.Behaviour && this.Behaviour.OnHit)
            this.Behaviour.OnHit(horizontal_overflow, vertical_overflow);
        this.Refresh();
    },
    OnMouseOver: function () {
        if (this.Behaviour && this.Behaviour.OnMouseOver)
            this.Behaviour.OnMouseOver();
    },
    OnClick: function () {
        if (this.Behaviour && this.Behaviour.OnClick)
            this.Behaviour.OnClick();
    }
}

function DefaultNekoBehaviour(neko) {
    this.initBehaviour(neko);
}
DefaultNekoBehaviour.prototype = {
    neko: null,
    bothered: 0,
    waking: 0,
    initBehaviour: function (neko) {
        this.SetNeko(neko);
    },
    SetNeko: function (neko) {
        this.neko = neko;
    },
    Behave: function () {
        if (!this.neko) return;
        if (this.bothered > 0) {
            this.bothered--;
            if (this.bothered < 9) this.neko.Sleep(this.bothered % 4 > 1 ? 1 : 2);
            else if (this.bothered < 13) this.neko.Yawn();
            else if (this.bothered < 25) this.neko.Scratch(this.bothered % 3 + 1);
            else if (this.bothered < 40) this.neko.Sit();
            else if (this.waking > 0) {
                this.waking--;
            } else {
                this.neko.EnsureRunning();
            }
        } else {
            this.neko.SetMoving(false);
        }
        if (Math.random() * 15 < 2) this.TurnRandomly();
    },
    TurnRandomly: function () {
        if (!this.neko) return;
        if (!this.lastTurn || Math.random() * 3 > 2) this.lastTurn =
            Math.round(Math.random() * 20 + 35) * (parseInt(Math.random() * 2) * 2 - 1);
        this.neko.SetAngle(this.neko.angle + this.lastTurn);
    },
    OnHit: function (ho, vo) {
        if (!this.neko) return;
        switch (ho) {
            case -1:
                if (this.neko.angle > 90 && this.neko.angle < 270) this.TurnRandomly();
                break;
            case 1:
                if (this.neko.angle < 90 || this.neko.angle > 270) this.TurnRandomly();
                break;
        }
        switch (vo) {
            case -1:
                if (this.neko.angle > 180) this.TurnRandomly();
                break;
            case 1:
                if (this.neko.angle > 0 && this.neko.angle < 180) this.TurnRandomly();
                break;
        }
    },
    OnMouseOver: function () {
        if (this.bothered <= 0) {
            this.waking = 5;
            this.neko.WakeUp();
        }
        this.bothered += 100;
        this.neko.SetMoving(true);
    },
    OnClick: function () { }
}

function SexualNekoBehaviour(neko) {
    this.initBehaviour(neko);
}
var sfb = new DefaultNekoBehaviour();
sfb.DefaultOnHit = sfb.OnHit;
sfb.OnHit = function (ho, vo) {
    this.DefaultOnHit(ho, vo);
    if ((Nekos.length > 1) && (ho == 0) && (vo == 0)) {
        if (!this.mate && (Math.random() * 100 < 1))
            this.FindMate();
        if (this.mate) {
            var dy = this.mate.y - this.neko.y;
            var dx = this.mate.x - this.neko.x;
            if (Math.random() * 100 < 3) {
                var ang = Math.atan2(dy, dx);
                this.neko.SetAngle(180 / Math.PI * ang);
            }
            if (dx * dx + dy * dy < this.neko.size * this.mate.size)
                this.Mate();
            if (Math.random() * 100 < 2) this.FindMate();
            if (Math.random() * 1000 < 8) this.mate = null;
        }
    }
}
sfb.FindMate = function () {
    this.mate = null;
    while (!this.mate || (this.mate.index == this.neko.index))
        this.mate = Nekos[Math.floor(Math.random() * Nekos.length)];
}
sfb.Mate = function () {
    if (!Nekos.MaxNekos) Nekos.MaxNekos = 10;
    if (Nekos.length >= Nekos.MaxNekos) return;
    var f = new Neko(new SexualNekoBehaviour());
    f.x = (this.neko.x + this.mate.x) / 2;
    f.y = (this.neko.y + this.mate.y) / 2;
    f.speed = (this.neko.speed + this.mate.speed) / 2;
    f.Behaviour.bothered = 100;
    f.SetMoving(true);
    f.SetSize((this.neko.size + this.mate.size) / 2);
    this.mate = null;
}
SexualNekoBehaviour.prototype = sfb;

//<!-- Site Utils -->

var SiteUtils = {
    Options: {
        Zoo: {
            init: function () {
                var val = document.cookie.replace(/(?:(?:^|.*;\s*)Options.Zoo\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                if (val === 'true') this.bringTheZoo();
            },
            toggle: function () {
                if (this.zoo) {
                    this.killemAll();
                } else {
                    this.bringTheZoo();
                }
                document.cookie = 'Options.Zoo=' + this.zoo;
            },
            bringTheZoo: function () {
                if (this.zoo) return;
                this.zoo = true;
                for (var nrFlies = 0; nrFlies < 2; nrFlies++) {
                    var fly = new Fly(new SexualFlyBehaviour());
                    fly.SetSize(30 + Math.random() * 60);
                    fly.speed = 25 + Math.random() * 50;
                }
                for (var nrNekos = 0; nrNekos < 2; nrNekos++) {
                    var neko = new Neko(new SexualNekoBehaviour());
                    neko.SetSize(30 + Math.random() * 60);
                    neko.speed = 25 + Math.random() * 50;
                }
            },
            killemAll: function () {
                if (!this.zoo) return;
                if (window.Flies) {
                    for (var i = 0; i < Flies.length; i++) {
                        Flies[i].Dispose();
                    }
                    delete window.Flies;
                    window.Flies = null;
                }
                if (window.Nekos) {
                    for (var i = 0; i < Nekos.length; i++) {
                        Nekos[i].Dispose();
                    }
                    delete window.Nekos;
                    window.Nekos = null;
                }
                this.zoo = false;
            }
        }
    }
}

//Had to do the code this way because of how globals work
FlyNekos = {
    "run": go
}

function go() {
    SiteUtils.Options.Zoo.toggle(); void (0);
    //alert("hello");
}