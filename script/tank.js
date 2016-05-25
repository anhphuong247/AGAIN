/**
 * Created by Administrator on 24/05/2016.
 */
class Tank{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.speedX=0;
        this.speedY=0;
        this.sprite=new Animation();
        this.spriteDown=new Animation(this.x,this.y,"tank_armor_down_c0_t",2,17);
        this.spriteLeft=new Animation(this.x,this.y,"tank_armor_left_c0_t",2,17);
        this.spriteUp=new Animation(this.x,this.y,"tank_armor_up_c0_t",2,17);
        this.spriteRight= new Animation(this.x,this.y,"tank_armor_right_c0_t",2,17);
       this.sprite=this.spriteDown;
        this.direction=1;
    }
    update(){
        this.x +=this.speedX;
        this.y +=this.speedY;
        if(this.speedX !=0 || this.speedY !=0){
            this.sprite.update(this.x,this.y);
        }
    }
    draw(context){
        this.sprite.draw(context);
    }
    move(direction) {
        switch (direction) {
            case 1://Move up

                this.speedY = -4;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = 1;
                break;
            case 2://Move down

                this.speedY = 4;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = 2;
                break;
            case 3://Move left

                this.speedX = -4;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = 3;
                break;
            case 4://Move right

                this.speedX = 4;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = 4;
                break;
        }
    }
}