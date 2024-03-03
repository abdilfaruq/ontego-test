import React from 'react';
import Image from 'next/image';
import AnimationLottie from '../utility/AnimationLottie';

export default function Content() {
  const closePopUp = () => {
    const csPopup = document.querySelector('.cs-popup');
    if (window.innerWidth > 575) {
      csPopup.style.right = '-700px';
    } else {
      csPopup.style.bottom = '-520px';
    }
    csPopup.style.opacity = 0;
  };

  return (
    <div id="content">
      <div className="content-wrap">
        <div className="cs-contact-top-border">
          <div className="container clearfix">
            <div className="row">
              <div id="cs-logo" className="col-lg-2 col-sm-6 nobottommargin">
                <a href="https://ontego.de/">
                  <Image src="/images/Ontego_Business_Mobi.svg" alt="Ontego Business Mobility" width={200} height={100}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-popup">
          <i className="icon-line-cross cs-hide-animate-1" onClick={closePopUp} />
          <div className="cs-icon-wrapper center" data-animate="flipInY">
            <div style={{ height: '22px', width: '28px', backgroundImage: "url('/images/check_white.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: 'inline-block' }} />
          </div>
          <h3 className="cs-hide-animate-2">Vielen für Ihr Interesse, Sie hören von uns.</h3>
          <h3 className="cs-hide-animate-1">Möchten Sie über neue Geräte sofort informiert werden?</h3>
          <p className="cs-body-2 cs-hide-animate-1">Wir schicken Ihnen gerne die wichtigsten Updates aus unserem Hardware Finder.</p>
          <div id="popupInput1" className="cs-form-field-group cs-form-field-white-input cs-hide-animate-1">
            <input type="email" placeholder="Email *" autoComplete="false" />
            <div className="cs-button cs-button-arrow cs-button-white cs-button-disabled">Abschicken</div>
          </div>
          <br />
          <div id="popupInput2" className="cs-form-field-group cs-form-field-white-input cs-hide-animate-1">
            <label className="cs-checkbox-container">
              Ich bin einverstanden, nur für Updates dieser Seite kontaktiert zu werden.
              <input type="checkbox" /><span className="cs-checkmark" />
            </label>
          </div>
          <input id="popupInput3" type="hidden" defaultValue="hardware_finder" />
        </div>
        <div className="cs-page-title-1 cs-section" style={{ marginTop: '10rem', marginBottom: '0px' }}>
          <div className="container clearfix">
            <div className="row cs-row-title" style={{ marginBottom: '0px' }}>
              <div className="cs-col-txt col-md-7">
                <div className="cs-text-wrapper">
                  <h1>Wie finde ich die <u>besten mobilen Geräte</u> für meine Mitarbeiter?</h1>
                </div>
              </div>
              <div className="cs-col-img offset-sm-4 col-sm-8">
                <div className="cs-img" style={{ backgroundImage: "url('/images/A.1.3_01_M1_Intro%402x.jpg')" }} />
              </div>
            </div>
            <div className="row cs-row-p justify-content-center align-items-center">
              <div className="col-lg-9">
                <AnimationLottie />
                <h6 className="cs-body-1" style={{ fontWeight: "bold", lineHeight: "1.6", textAlign: "center", textTransform: "capitalize" }}>
                  Mobile Anwendungen gehören heute zum Alltag in Unternehmen: in der Produktion, in der Lagerlogistik, der Instandhaltung oder der Auslieferung. Wir geben Ihnen einen Überblick über mobile Hardware vom Handheld-Computer über mobile Scanner, Stapler-Terminals und Tablets bis zu robusten Smartphones und mobilen Druckern.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-section cs-hidden-md-up" style={{ marginTop: '60px' }}>
          <div className="cs-standard-module-2 container clearfix">
            <div className="row">
              <div className="col-lg-6">
                <div className="cs-text-wrapper-outer">
                  <div className="cs-text-wrapper">
                    <h5>Hier haben wir leider nicht genug Platz ...</h5>
                    <p className="cs-body-1">
                      ... für unseren Hardware Finder. Aber besuchen Sie diese Seite gern beim Morgenkaffee am Arbeitsplatz und stöbern Sie durch Empfehlungen, Übersichten und hilfreiche Links zu den aktuellsten mobilen Endgeräten.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs-img" style={{ backgroundImage: "url('/images/A.1.3_02_Hardware_Finder.jpg')" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
