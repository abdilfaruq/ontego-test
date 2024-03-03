import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleHeader = () => {
        const headerRowTop = document.getElementById("cs-header-row-top");
        const headerCrossIcon = document.querySelector("#header .icon-line-cross");
        const headerMenuIcon = document.querySelector("#header .icon-line-menu");

        if (isExpanded) {
            $(headerRowTop).stop(true);
            $(headerCrossIcon).animate({ opacity: "0" }, 300, "swing", () => {
                $(headerCrossIcon).addClass("icon-line-menu");
                $(headerMenuIcon).removeClass("icon-line-cross");
                $(headerMenuIcon).animate({ opacity: "1" }, 300, "swing");
                $(headerRowTop).removeClass("cs-header-expanded");
            });
            $(headerRowTop).animate({ height: "48px" }, 300, "swing", () => {
                setIsExpanded(false);
            });
        } else {
            $(headerRowTop).stop(true);
            $(headerMenuIcon).animate({ opacity: "0" }, 300, "swing", () => {
                $(headerMenuIcon).addClass("icon-line-cross");
                $(headerCrossIcon).removeClass("icon-line-menu");
                $(headerCrossIcon).animate({ opacity: "1" }, 300, "swing");
                $(headerRowTop).addClass("cs-header-expanded");
            });
            $(headerRowTop).animate({ height: "100vh" }, 300, "swing", () => {
                setIsExpanded(true);
            });
        }
    };

  return (
    <>
        <header id="header" className="static-sticky">
            <div id="header-wrap">
                <div id="cs-header-row-top">
                    <div className="container clearfix cs-expanded-side-clear">
                        <div className="row cs-expanded-side-clear">
                            <div id="cs-responsive-menu" className="d-sm-block d-lg-none"><i className="icon-line-menu" onClick={toggleHeader} /></div>
                                <div id="cs-logo" className="col-lg-2 col-sm-6">
                                    <a href="https://ontego.de/">
                                        <Image src="/images/Ontego_Business_Mobi.svg" alt="Ontego Business Mobility" width={200} height={100}/>
                                    </a>
                                </div>
                                <nav id="cs-primary-menu" className="col-lg-8">
                                    <ul>
                                        <li className="cs-active-nav">
                                            <a onClick={() => window.location.href = "/"}>
                                            <div>Produkte</div>
                                            </a>
                                            <div className="cs-dropdown-wrapper">
                                            <div className="cs-dropdown-row-multi">
                                                <div className="container clearfix">
                                                <div className="row">
                                                    <div className="cs-dropdown-logo col-lg-2">
                                                        <a id="sap">
                                                            <Image src="/images/Ontego_subline.svg" alt="Ontego SAP Mobility" width={200} height={100}/>
                                                        </a>
                                                    </div>
                                                    <div className="cs-dropdown-submenu-wrapper col-lg-10">
                                                    <div className="cs-dropdown-submenu">
                                                        <a id="sapFunktionen">
                                                        <div className="cs-dropdown-submenu-title"><span style={{marginRight:"10px"}}>Funktionen</span></div>
                                                        </a>
                                                        <ul>
                                                        <li>
                                                            <a id="sapFunktionenUser">
                                                            <div>User Experience</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapFunktionenTemplate">
                                                            <div>Template Prinzip</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapFunktionenIntegration">
                                                            <div>SAP Integration</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapFunktionenOffline">
                                                            <div>Offline &amp; Sync+</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapFunktionenErp">
                                                            <div>ERP-Erweiterungen</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapFunktionenDesign">
                                                            <div>Ontego Designer</div>
                                                            </a>
                                                        </li>
                                                        </ul>
                                                    </div>
                                                    <div className="cs-dropdown-submenu">
                                                        <a id="sapEinsatz">
                                                        <div className="cs-dropdown-submenu-title"><span>Einsatzbereiche</span></div>
                                                        </a>
                                                        <ul>
                                                        <li>
                                                            <a id="sapEinsatzLager">
                                                            <div>Lagerlogistik</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapEinsatzProdukt">
                                                            <div>Produktion</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapEinsatzInventur">
                                                            <div>Inventur</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapEinsatzService">
                                                            <div>Service Management</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapEinsatzInstand">
                                                            <div>Instandhaltung</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="sapEinsatzWeitere">
                                                            <div>Weitere Bereiche</div>
                                                            </a>
                                                        </li>
                                                        </ul>
                                                    </div>
                                                    <div className="cs-dropdown-submenu">
                                                        <a id="sapMobile" >
                                                        <div className="cs-dropdown-submenu-title"><span>Mobile Geräte</span></div>
                                                        </a>
                                                        <p>
                                                        Mobile Hardware für meine Mitarbeiter
                                                        finden.
                                                        </p>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a onClick={() => window.location.href = "/"}>
                                            <div>Warum Ontego?</div>
                                            </a>
                                            <div className="cs-dropdown-wrapper">
                                            <div className="cs-dropdown-row">
                                                <div className="container clearfix">
                                                <div className="row">
                                                    <div className="cs-dropdown-submenu-wrapper col-lg-10 offset-lg-2">
                                                    <div className="cs-dropdown-submenu">
                                                        <a id="warumGute">
                                                        <div className="cs-dropdown-submenu-title"><span>Gute
                                                            Gründe</span>
                                                        </div>
                                                        </a>
                                                        <p>
                                                        Warum Unternehmen auf Ontego Business
                                                        Mobility
                                                        setzen.
                                                        </p>
                                                    </div>
                                                    <div className="cs-dropdown-submenu">
                                                        <a id="warumEins">
                                                        <div className="cs-dropdown-submenu-title"><span>Im
                                                            Einsatz</span>
                                                        </div>
                                                        </a>
                                                        <ul>
                                                        <li>
                                                            <a id="warumReferenzen">
                                                            <div>Referenzen</div>
                                                            </a>
                                                        </li>
                                                        </ul>
                                                    </div>
                                                    <div className="cs-dropdown-submenu">
                                                        <a id="warumDas">
                                                        <div className="cs-dropdown-submenu-title"><span>Das
                                                            sind wir</span>
                                                        </div>
                                                        </a>
                                                        <ul>
                                                        <li>
                                                            <a id="warumDasUnter">
                                                            <div>Unternehmen</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="warumDasStand">
                                                            <div>Standorte</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="warumKarriere" href="http://work.commsult.de/" target="_blank">
                                                            <div className="cs-external-link">
                                                                Karriere
                                                            </div>
                                                            </a>
                                                        </li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a onClick={() => window.location.href = "/"}>
                                            <div>Events</div>
                                            </a>
                                            <div className="cs-dropdown-wrapper">
                                            <div className="cs-dropdown-row">
                                                <div className="container clearfix">
                                                <div className="row">
                                                    <div className="cs-dropdown-submenu-wrapper col-lg-10 offset-lg-2">
                                                    <div className="cs-dropdown-submenu">
                                                        <a id="messen">
                                                        <div className="cs-dropdown-submenu-title"><span>Messen
                                                            &amp; Kongresse</span>
                                                        </div>
                                                        </a>
                                                        <ul>
                                                        <li>
                                                            <a href="https://info.ontego.de/ontegogl-vlb-logistikfachkongress-2024" target="_blank" id="vlbLogistik">
                                                            <div>VLB Logistikfachkongress 2024</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://info.ontego.de/logimat-2024-moderne-sap-mde-loesungen" target="_blank" id="logimat2024">
                                                            <div>LogiMAT 2024</div>
                                                            </a>
                                                        </li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a onClick={() => window.location.href = "/"}>
                                            <div>Ressourcen</div>
                                            </a>
                                            <div className="cs-dropdown-wrapper">
                                            <div className="cs-dropdown-row">
                                                <div className="container clearfix">
                                                <div className="row">
                                                    <div className="cs-dropdown-submenu-wrapper col-lg-10 offset-lg-2">
                                                    <a onClick={() => window.location.href = "/"} />
                                                    <div className="cs-dropdown-submenu">
                                                        <a onClick={() => window.location.href = "/"} />
                                                        <a id="mobility" href="https://blog.ontego.de/" target="_blank">
                                                        <div className="cs-dropdown-submenu-title"><span>Mobility Blog</span></div>
                                                        </a>
                                                        <p>
                                                        Informationen und Tipps rund um MDE für
                                                        SAP und andere ERP-Systeme.
                                                        </p>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <div id="cs-demo-button" className="col-lg-2">
                                    <div className="cs-button cs-button-arrow cs-button-white">
                                        Demo anfragen
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="cs-header-row-bottom">
                    <div className="container clearfix">
                        <div className="row cs-scroll-start">
                            <div className="cs-dropdown-logo col-lg-2">
                                <a id="sap">
                                    <Image src="/images/Ontego_subline.svg" alt="Ontego SAP Mobility" width={200} height={100}/>
                                </a>
                            </div>
                            <div className="cs-dropdown-submenu-wrapper col-lg-10">
                                <div className="cs-tabs clearfix">
                                    <ul className="tab-nav clearfix">
                                        <li>
                                            <a id="sapFunktionen">
                                                <div className="cs-dropdown-submenu-title"><span>Funktionen</span></div>
                                            </a>
                                        </li>
                                        <li>
                                            <a id="sapEinsatz">
                                                <div className="cs-dropdown-submenu-title"><span>Einsatzbereiche</span></div>
                                            </a>
                                        </li>
                                        <li className="cs-initial-active-tab">
                                            <a id="sapMobile">
                                                <div className="cs-dropdown-submenu-title"><span>Mobile Geräte</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-container">
                                        <div className="tab-content clearfix" id="tab-1">
                                        <ul>
                                            <li>
                                            <a id="sapFunktionenUser">
                                                <div>User Experience</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapFunktionenTemplate">
                                                <div>Template Prinzip</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapFunktionenIntegration">
                                                <div>SAP Integration</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapFunktionenOffline">
                                                <div>Offline &amp; Sync+</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapFunktionenErp">
                                                <div>ERP Erweiterungen</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapFunktionenDesign">
                                                <div>Ontego Designer</div>
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="tab-content clearfix" id="tab-2">
                                        <ul>
                                            <li>
                                            <a id="sapEinsatzLager">
                                                <div>Lagerlogistik</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapEinsatzProdukt">
                                                <div>Produktion</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapEinsatzInventur">
                                                <div>Inventur</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapEinsatzService">
                                                <div>Service Management</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapEinsatzInstand">
                                                <div>Instandhaltung</div>
                                            </a>
                                            </li>
                                            <li>
                                            <a id="sapEinsatzWeitere">
                                                <div>Weitere Bereiche</div>
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
