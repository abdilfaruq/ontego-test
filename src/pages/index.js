import Head from "next/head";
import ContentContainer from "@/components/complex/ContentContainer";

export default function Home() {
  
  return (
    <>
        <div id="section-gerate" className="cs-section cs-hfinder cs-hidden-sm-down" style={{paddingTop:"160px",marginTop:"-100px"}}>
          <div className="container clearfix">
            <div className="row">
              <div className="col-md-12 center" style={{marginBottom:"30px"}}>
                <div id="cs-hfinder-expandable">
                  <div className="cs-hfinder-filter-row">
                    <span style={{"color":"#2D333D",fontFamily:"Capitolium2",fontSize:"16px",fontWeight:"bold",lineHeight:"28px",marginRight:"16px"}}>Auswahl</span>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-a-alle" id="cs-a-alle" defaultChecked />
                      <span className="cs-chip-checkmark">Alle Geräte</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-a-favoriten" id="cs-a-favoriten" />
                      <span className="cs-chip-checkmark">Unsere Favoriten</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-a-mietgeräte" id="cs-a-mietgeräte" />
                      <span className="cs-chip-checkmark">Mietgeräte</span></label></div>
                  </div>
                  <div className="cs-hfinder-filter-row">
                    <span style={{"color":"#2D333D",fontFamily:"Capitolium2",fontSize:"16px",fontWeight:"bold",lineHeight:"28px",marginRight:"16px"}}>Gerätetyp</span>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-g-handheld" />
                      <span className="cs-chip-checkmark">Handheld-Computer</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-g-smartphone" />
                      <span className="cs-chip-checkmark">Smartphone</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-g-tablet" />
                      <span className="cs-chip-checkmark">Staplerterminal/Tablet</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-g-wearable" />
                      <span className="cs-chip-checkmark">Wearable/Handscanner</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-g-drucker" />
                      <span className="cs-chip-checkmark">Drucker</span></label></div>
                  </div>
                  <div className="cs-hfinder-filter-row cs-hfinder-filter-row-toogle cs-hfinder-filter-row-toogle-inactive cs-hfinder-filter-row-toogle-fade">
                    <span style={{"color":"#2D333D",fontFamily:"Capitolium2",fontSize:"16px",fontWeight:"bold",lineHeight:"28px",marginRight:"16px"}}>Hersteller</span>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-ACD" />
                      <span className="cs-chip-checkmark">ACD</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Advantech" />
                      <span className="cs-chip-checkmark">Advantech</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Bixolon" />
                      <span className="cs-chip-checkmark">Bixolon</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Casio" />
                      <span className="cs-chip-checkmark">Casio</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-CAT" />
                      <span className="cs-chip-checkmark">CAT</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Cipherlab" />
                      <span className="cs-chip-checkmark">Cipherlab</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Datalogic" />
                      <span className="cs-chip-checkmark">Datalogic</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Feig" />
                      <span className="cs-chip-checkmark">Feig</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Getac" />
                      <span className="cs-chip-checkmark">Getac</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Gigaset" />
                      <span className="cs-chip-checkmark">Gigaset</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Honeywell" />
                      <span className="cs-chip-checkmark">Honeywell</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-i-Safe-Mobile" />
                      <span className="cs-chip-checkmark">i.Safe Mobile</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-iData" />
                      <span className="cs-chip-checkmark">iData</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Keyence" />
                      <span className="cs-chip-checkmark">Keyence</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-KoamTac" />
                      <span className="cs-chip-checkmark">KoamTac</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Newland" />
                      <span className="cs-chip-checkmark">Newland</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Panasonic" />
                      <span className="cs-chip-checkmark">Panasonic</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Point-Mobile" />
                      <span className="cs-chip-checkmark">Point Mobile</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-ProGlove" />
                      <span className="cs-chip-checkmark">ProGlove</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Samsung" />
                      <span className="cs-chip-checkmark">Samsung</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-h-Zebra" />
                      <span className="cs-chip-checkmark">Zebra</span></label></div>
                  </div>
                  <div className="cs-hfinder-filter-row cs-hfinder-filter-row-toogle cs-hfinder-filter-row-toogle-inactive cs-hfinder-filter-row-toogle-fade" style={{marginBottom:"24px"}}>
                    <span style={{"color":"#2D333D",fontFamily:"Capitolium2",fontSize:"16px",fontWeight:"bold",lineHeight:"28px",marginRight:"16px"}}>Einsatzgebiet</span>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-e-lagerlogistik" />
                      <span className="cs-chip-checkmark">Lager &amp; Produktion</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-e-getränkelogistik" />
                      <span className="cs-chip-checkmark">Getränkelogistik</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-e-instandhaltung" />
                      <span className="cs-chip-checkmark">Instandhaltung</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-e-service" />
                      <span className="cs-chip-checkmark">Field Service</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-e-healthcare" />
                      <span className="cs-chip-checkmark">Healthcare</span></label></div>
                    <div className="cs-form-field-group" style={{marginRight:"16px"}}><label className="cs-chip-container">
                      <input type="checkbox" cs-data-filter=".cs-e-geschuetzt" />
                      <span className="cs-chip-checkmark">Ex-geschützt</span></label></div>
                  </div>
                  <div className="row justify-content-center cs-hfinder-filter-row-toogle cs-hfinder-filter-row-toogle-inactive cs-hfinder-filter-row-toogle-fade">
                    <div className="col-lg-4 col-md-6" style={{marginBottom:"40px"}}>
                      <div style={{"padding":"0 67px"}}>
                        <div style={{"color":"#2D333D",fontFamily:"Capitolium2",fontSize:"16px",fontWeight:"bold",lineHeight:"28px",marginBottom:"-13px"}}>
                          Listenpreis
                        </div>
                        <span className="cs-range-label-unit-from">€</span>
                        <span className="cs-range-label-unit-to">€</span>
                        <input className="range_01" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6" style={{marginBottom:"40px"}}>
                      <div style={{"padding":"0 67px"}}>
                        <div style={{"color":"#2D333D",fontFamily:"Capitolium2",fontSize:"16px",fontWeight:"bold",lineHeight:"28px",marginBottom:"-13px"}}>
                          Gewicht
                        </div>
                        <span className="cs-range-label-unit-from">g</span><span className="cs-range-label-unit-to">g</span>
                        <input className="range_02" />
                      </div>
                    </div>
                  </div>
                  <div className="row cs-hfinder-filter-row">
                    <div className="offset-md-1 col-md-5" style={{marginBottom:"21px"}}>
                      <div style={{"display":"table","height":"100%","width":"100%"}}>
                        <div style={{"display":"table-cell",verticalAlign:"bottom",WebkitTextAlign:"left",textAlign:"left","color":"#96999E",fontFamily:"Roboto",fontSize:"12px",letterSpacing:"0.2px",lineHeight:"18px"}}>
                          Alle Angaben / Preise ohne Gewähr
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5" style={{marginBottom:"21px"}}>
                      <div style={{"display":"table","height":"100%","width":"100%"}}>
                        <div style={{"display":"table-cell",verticalAlign:"bottom",WebkitTextAlign:"right",textAlign:"right","color":"#0077B6",fontFamily:"Roboto",fontSize:"16px",fontWeight:"500",letterSpacing:"0.18px",lineHeight:"26px","cursor":"pointer"}} id="cs-reset-button">
                          Filter zurücksetzen
                        </div>
                        <div style={{"display":"table-cell",verticalAlign:"bottom",WebkitTextAlign:"right",textAlign:"right","color":"#0077B6",fontFamily:"Roboto",fontSize:"16px",fontWeight:"500",letterSpacing:"0.18px",lineHeight:"26px","cursor":"pointer"}} id="cs-expand-button">
                            Mehr Filter anzeigen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ContentContainer />
          </div>
      </div>
    </>
  );
}
