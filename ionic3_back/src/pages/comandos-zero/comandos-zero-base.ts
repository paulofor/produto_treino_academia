



export abstract class ComandosZeroPageBase {


  constructor() {
  }

  protected abstract getNomeAplicacao() : string;
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComandosZeroPageBase');
  }


}
