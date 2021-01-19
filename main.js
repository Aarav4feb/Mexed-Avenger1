var canvas = new fabric.Canvas("myCanvas")
var bpart_width = 30;
var bpart_height = 30;
player_x = 100;
player_y = 100;
var player_object = "";
bpart_object = "";

function update_player() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function update_bodypart(part) {
    fabric.Image.fromURL(part,function(Img){
        bpart_object = Img;
        bpart_object.scaleToWidth(block_width);
        bpart_object.scaleToHeight(block_height);
        bpart_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object)
    });
}