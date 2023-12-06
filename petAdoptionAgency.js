const { expect } = require("chai");

const petAdoptionAgency = {
    isPetAvailable(pet, availableCount, vaccinated) {
      if (typeof pet !== "string" || typeof availableCount !== "number" ||typeof vaccinated !== "boolean") {
        throw new Error("Invalid input");
      }

      if (availableCount <= 0) {
        return `Sorry, there are no ${pet}(s) available for adoption at the agency.`;
      } else {
        if(vaccinated){
            return `Great! We have ${availableCount} vaccinated ${pet}(s) available for adoption at the agency.`;
        }else{
            return `Great! We have ${availableCount} ${pet}(s) available for adoption, but they need vaccination.`;
        }
        
      }
    },
    getRecommendedPets(petList, desiredTraits) {
      let recommendedPets = [];
  
      if (!Array.isArray(petList) || typeof desiredTraits !== "string") {
        throw new Error("Invalid input");
      }
  
      petList.forEach((pet) => {
        if (pet.traits === desiredTraits) {
          recommendedPets.push(pet.name);
        }
      });
  
      if (recommendedPets.length === 0) {
        return `Sorry, we currently have no recommended pets with the desired traits: ${desiredTraits}.`;
      } else {
        return `Recommended pets with the desired traits (${desiredTraits}): ${recommendedPets.join(", ")}`;
      }
    },
    adoptPet(pet, adopterName) {
      if (typeof pet !== "string" || typeof adopterName !== "string") {
        throw new Error("Invalid input");
      }
  
      return `Congratulations, ${adopterName}! You have adopted ${pet} from the agency. Enjoy your time with your new furry friend!`;
    },
  };
 

 
describe('Main tests', () => {
  it('Combinations', () => {
    expect(petAdoptionAgency.isPetAvailable('Dog',0,true)).to.equal(`Sorry, there are no Dog(s) available for adoption at the agency.`)
    expect(petAdoptionAgency.isPetAvailable('Dog',-1,true)).to.equal(`Sorry, there are no Dog(s) available for adoption at the agency.`)
    expect(petAdoptionAgency.isPetAvailable('Dog',1,true)).to.equal(`Great! We have 1 vaccinated Dog(s) available for adoption at the agency.`)
    expect(petAdoptionAgency.isPetAvailable('Dog',1,false)).to.equal(`Great! We have 1 Dog(s) available for adoption, but they need vaccination.`)
  })

  it('Invalid Input', () => {
    expect(() =>{petAdoptionAgency.isPetAvailable(1,"1",1)}).to.throw('Invalid input')

    expect(() =>{petAdoptionAgency.isPetAvailable("Dog",1,1)}).to.throw('Invalid input')
    expect(() =>{petAdoptionAgency.isPetAvailable("Dog","1",true)}).to.throw('Invalid input')

    expect(() =>{petAdoptionAgency.isPetAvailable(1,1,true)}).to.throw('Invalid input')
    expect(() =>{petAdoptionAgency.isPetAvailable("Dog",1,1)}).to.throw('Invalid input')

    expect(() =>{petAdoptionAgency.isPetAvailable("Dog","1",true)}).to.throw('Invalid input')
    expect(() =>{petAdoptionAgency.isPetAvailable(1,1,true)}).to.throw('Invalid input')

   })

   it('Recommended', () => {
    expect(petAdoptionAgency.getRecommendedPets([{name:'Ivan',traits:'roach'}],'roach')).to.equal(`Recommended pets with the desired traits (roach): Ivan`)
    expect(petAdoptionAgency.getRecommendedPets([{name:'Ivan',traits:'roach'},{name:'Iosko',traits:'aids'}],'roach')).to.equal(`Recommended pets with the desired traits (roach): Ivan`)
    expect(petAdoptionAgency.getRecommendedPets([{name:'Ivan',traits:'aids'},{name:'Iosko',traits:'aids'}],'roach')).to.equal(`Sorry, we currently have no recommended pets with the desired traits: roach.`)
   
  })

  it('Invalid Input 2', () => {
    expect(() =>{petAdoptionAgency.getRecommendedPets(1,1)}).to.throw('Invalid input')
    expect(() =>{petAdoptionAgency.getRecommendedPets([{name:'Ivan',traits:'aids'},{name:'Iosko',traits:'aids'}],1)}).to.throw('Invalid input')
    expect(() =>{petAdoptionAgency.getRecommendedPets(1,'aids')}).to.throw('Invalid input')
   })

   it('Adopt', () => {
    expect(petAdoptionAgency.adoptPet('Boogie','Miroslav')).to.equal(`Congratulations, Miroslav! You have adopted Boogie from the agency. Enjoy your time with your new furry friend!`)
   
  })

  it('Invalid Input 3', () => {
    expect(() =>{petAdoptionAgency.adoptPet(1,1)}).to.throw('Invalid input')
    expect(() =>{petAdoptionAgency.adoptPet('q',1)}).to.throw('Invalid input')
    expect(() =>{petAdoptionAgency.adoptPet(1,'aids')}).to.throw('Invalid input')
   })
   
})