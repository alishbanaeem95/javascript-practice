
function Vehicle(colour, speed, wheels){
    this.colour = colour;
    this.speed = speed;
    this.wheels = wheels;

    this.start = function(){
        console.log("Vehicle has started..");
    }

    this.break = function(){
        console.log("Vehicle has applied breaks..");
    }

    this.accelerate = function(){
        console.log("Vehicle is accelarting..");
    }
}

function TransportationVehicle(load, capacity){
    this.load = load;
    this.capacity = capacity;
}

function PassengerVehicle(seats){
    this.seats = seats;
}

function OffRoadVehicle(cost){
    this.cost = cost;
}

function Car(brand){
    this.brand = brand;

    this.stop = function(){
        console.log("Car has stopped..");
    }
}

function Bike(model){
    this.model = model;
}

function Truck(make){
    this.make = make;
}

function Bus(routeNo){
    this.routeNo = routeNo;
}

function SUV(year, cost, brand, colour, speed, wheels){
    //manufacturing year
    this.year = year;
    Car.call(this, brand);
    OffRoadVehicle.call(this, cost);
}

