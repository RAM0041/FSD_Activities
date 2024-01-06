
class UberPriceCalculator {
    
    static BASE_FARE = 5;
    static COST_PER_MILE = 2;
    static COST_PER_MINUTE = 0.5;
  
    
    static calculatePrice(distance, time) {
      const fare = this.BASE_FARE + this.COST_PER_MILE * distance + this.COST_PER_MINUTE * time;
      return fare.toFixed(2); 
    }
  }
  
  
  const person1 = new Person("John Doe", 25, "Male");
  console.log("Person: ", person1);
  
  const distanceTraveled = 10; 
  const travelTime = 15; 
  
  const uberPrice = UberPriceCalculator.calculatePrice(distanceTraveled, travelTime);
  console.log(`Uber Price: $${uberPrice}`);