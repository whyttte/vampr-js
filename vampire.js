class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let thisVampire = this;
    while (thisVampire.creator) {
      thisVampire = thisVampire.creator;
      numberOfVampire++;
    }
    return numberOfVampire;


  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal) {
      return false;
    }
    return true;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }
    for (let other of this.offspring) {
      let otherVampire = other.vampireWithName(name)
      if (otherVampire) {
        return otherVampire;
      }
    }
    return null; 
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    if (this) {
      let a = this.offspring.length
      if (a > 1){
        while (a) {
          
        }
      }

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millennialVampires = [];
    if (this.yearConverted > 1980) {
      millennialVampires.push(this);
    }
    for (let offspring of this.offspring) {
      millennialVampires = millennialVampires.concat(offspring.allMillennialVampires); 
    }
    return millennialVampires;
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (this.isMoreSeniorThan > vampire.isMoreSeniorThan) {
    //   if (this.offspring.length > 0);
      // return vampire;
    }

  }
}

module.exports = Vampire;

