import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style/TeamsPage.css';
import G2Logo from '../views/Logo/G2.jpg';
import BDSLogo from '../views/Logo/BDS.jpg';
import MADLogo from '../views/Logo/MAD.jpg'
import FNCLogo from '../views/Logo/FNC.jpg'

import T1Logo from '../views/Logo/T1.jpg';
import KTLogo from '../views/Logo/KT.jpg';
import GENLogo from '../views/Logo/GENG.jpg';
import DKLogo from '../views/Logo/DK.jpg';

import JDGLogo from '../views/Logo/JDG.jpg';
import BLGLogo from '../views/Logo/BLG.jpg';
import LNGLogo from '../views/Logo/LNG.jpg';
import WEIBOLogo from '../views/Logo/WEIBO.jpg';

import C9Logo from '../views/Logo/C9.jpg';
import NRGLogo from '../views/Logo/NRG.jpg';
import TLLogo from '../views/Logo/TL.jpg';
import GGLogo from '../views/Logo/GG.jpg';

import PSQLogo from '../views/Logo/PSG.jpg';
import CBTCLogo from '../views/Logo/CBTC.jpg';

import GAMLogo from '../views/Logo/GAM.jpg';
import TWLogo from '../views/Logo/TW.jpg';

import LOUDLogo from '../views/Logo/LOUD.jpg';
import DFMLogo from '../views/Logo/DFM.jpg';
import R7Logo from '../views/Logo/R7.jpg';


function TeamsPage() {
    const teams = [
        { logo: G2Logo, name: "G2 Esport", palmares: "10x LEC Winner", region: "LEC" },
        { logo: BDSLogo, name: "BDS" , palmares: "x", region: "LEC" },       
        { logo: FNCLogo, name: "Fnatic" , palmares: "x", region: "LEC" },
        { logo: MADLogo, name: "Mad Lions" , palmares: "x", region: "LEC" },

        { logo: JDGLogo, name: "JD Gaming", palmares: "x", region: "LPL" },
        { logo: BLGLogo, name: "Bilbili Gaming" , palmares: " ", region: "LPL" },
        { logo: LNGLogo, name: "LNG Esport" , palmares: " ", region: "LPL" },
        { logo: WEIBOLogo, name: "Weibo Gaming" , palmares: " ", region: "LPL" },

        { logo: T1Logo, name: "T1" , palmares: "x", region: "LCK" },
        { logo: KTLogo, name: "KT Roylster" , palmares: " ", region: "LCK" },
        { logo: GENLogo, name: "Gen G" , palmares: " ", region: "LCK" },
        { logo: DKLogo, name: "Dplus Kia" , palmares: " ", region: "LCK" },

        { logo: C9Logo, name: "Cloud 9" , palmares: "x", region: "NA" },
        { logo: NRGLogo, name: "NRG" , palmares: " ", region: "NA" },
        { logo: TLLogo, name: "Team Liquid" , palmares: " ", region: "NA" },
        { logo: GGLogo, name: "Golden Guardians" , palmares: " ", region: "NA" },


        { logo: PSQLogo, name: "PSG Talon" , palmares: " ", region: "PCS" },
        { logo: CBTCLogo, name: "CTBC Flying Oylster" , palmares: " ", region: "PCS" },

        { logo: GAMLogo, name: "GAM Esport" , palmares: " ", region: "VCS" },
        { logo: TWLogo, name: "Team Whales" , palmares: " ", region: "VCS" },    

        { logo: LOUDLogo, name: "LOUD" , palmares: " ", region: "CBLOL" },

        { logo: DFMLogo, name: "DetonatioN FocusMe" , palmares: " ", region: "LJL" },

        { logo: R7Logo, name: "MovieStar R7" , palmares: " ", region: "LLA" },

        
    ];

    const [filter, setFilter] = useState("");
    const filteredTeams = teams.filter(team => !filter || team.region === filter);

    return (
        <div className="container">
            <div className='filter'>
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="">Toutes les régions</option>
                    <option value="LEC">LEC</option>
                    <option value="LPL">LPL</option>
                    <option value="LCK">LCK</option>
                    <option value="NA">NA</option>
                    <option value="VCS">VCS</option>
                    <option value="PCS">PCS</option>
                    <option value="LJL">LJL</option>
                    <option value="LLA">LLA</option>
                </select>
            </div>

            <section className="teams">
                {filteredTeams.map((team, index) => (
                    <Link key={index} to={{ pathname: `/teams/${encodeURIComponent(team.name)}`, state: { team } }}>
                        <div>
                            <img src={team.logo} alt={`Logo de ${team.name}`} />
                            <p className="name">{team.name}</p>
                            <p>{team.palmares}</p>
                            <p>{team.region}</p>
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
}

export default TeamsPage;
