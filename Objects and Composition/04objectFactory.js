function factory(library,orders){

    const arr = [];

    for (const entries of orders) {
        const obj = {};
        const template = entries.template;

        for (const key in template) {
            obj[key] = template[key];
        }
        arr.push(obj);

        const parts = entries.parts;
        for (const fun of parts) {
            obj[fun] = library[fun]
        }
    }
    return arr;
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };


  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  console.log(products);
 
 products[3].play(`Trap Connection `,`bad bitch 2`)