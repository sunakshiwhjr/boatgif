//do 1 start
class Boat
{
    /*part1
    constructor(x,y,width, height)
    {

        var options=
        {
            restitution:0.8,
            friction:1,
            density:1,
        };

        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('assets/boat.png');
        World.add(myWorld, this.body);

    }
*/

//part 2
constructor(x,y,width, height, boatPos)
{

    var options=
    {
        restitution:0.8,
        friction:1,
        density:1,
    };

    this.body = Bodies.rectangle(x,y,width, height, options);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.image = loadImage('ship-sailing.gif');
    World.add(myWorld, this.body);

}
    display()
    {
    
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

       // translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);

        image(this.image,pos.x, this.boatPosition, this.width, this.height);
        
        
        pop();
        
    }



    remove(index)
    {

        Matter.World.remove(myWorld, boats[index].body);
        boats.splice(index,1);
    }
}