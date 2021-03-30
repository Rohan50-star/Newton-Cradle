class Bob{
    constructor(x, y) 
    {    
        var options = 
        {
            isStatic:false,
            'restitution':1.2,
            'friction':0.4,
            'density':1
        }
        this.radius = 32;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.x = x;
        this.y = y;
            
        World.add(world, this.body);
    }

    display()
    {
        push(); 
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER); 
        fill(255,0,254)
        ellipse(0, 0, this.radius*2, this.radius*2); 
        pop(); 
    } 
}