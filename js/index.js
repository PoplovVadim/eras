let albumsInfo = [
    {
        id: 'taylor-swift',
        title: 'Taylor Swift',
        imgTitle: 'a-ts',
        bgColor: 'rgb(165,203,167)',
        h1Color: 'rgb(27,84,38)',
        font: 'Satisfaction',
        ovInfo: ['October 24, 2006', '11', 'Country pop', 'Big Machine Records',
            'Scott Borchetta <span>(executive producer)</span>, Nathan Chapman, Robert Ellis Orrall'],
        tvInfo: [],
        ovEditions: [['Best Buy Exclusive', 'October 24, 2006', 'a-ts'], ['Deluxe', 'November 6, 2007', 'edtn-ts-dlx'], 
            ['2008 reissue', 'March 18, 2008', 'a-ts'], ['Karaoke', '2008', 'edtn-ts-kr'], ['Karaoke <span>(Digital)</span>', '2008', 'edtn-ts-kr-alt'], 
            ['Big Machine Radio Release Special', 'December 13, 2018', 'edtn-ts-bmrrs']],
        tvEditions: []
    },
    {
        id: 'fearless',
        title: 'Fearless',
        imgTitle: 'a-fear',
        bgColor: 'rgb(215,181,138)',
        h1Color: 'rgb(102,68,36)',
        font: 'Archivo',
        ovInfo: ['November 11, 2008', '13', 'Country pop, pop rock', 'Big Machine Records',
            'Scott Borchetta <span>(executive producer)</span>, Taylor Swift, Nathan Chapman'],
        tvInfo: ['April 9, 2021', '26', 'Country, country pop, pop rock', 'Republic Records',
            'Taylor Swift <span>(executive producer)</span>, Jack Antonoff, Aaron Dessner, Christopher Rowe'],
        ovEditions: [['Digital', 'November 11, 2008', 'edtn-fear-digit'], ['Japanese', 'November 12, 2008', 'edtn-fear-jap'], ['Karaoke', '2008', 'edtn-fear-kr'], ['Karaoke <span>(Digital)</span>', '2008', 'edtn-fear-kr-alt'], 
            ['International', 'March 2, 2009', 'edtn-fear-int'], ['Platinum', 'October 26, 2009', 'edtn-fear-plat'], ['Big Machine Radio Release Special', 'December 13, 2018', 'edtn-fear-bmrrs']],
        tvEditions: [['Deluxe', 'April 9, 2021', 'a-fear-tv'], ['The Halfway Out The Door Chapter', 'May 13, 2021', 'c-fear-tv-hotd'], ['The Kissing In The Rain Chapter', 'May 19, 2021', 'c-fear-tv-kitr'],
            ['The I Remember What You Said Last Night Chapter', 'May 24, 2021', 'c-fear-tv-irwysln'], ['The From The Vault Chapter', 'May 26, 2021', 'c-fear-tv-ftv'], 
            ['The More Fearless (Taylor\'s Version) Chapter', 'March 17, 2023', 'c-fear-tv-mftv']]
    },
    {
        id: 'speak-now',
        title: 'Speak Now',
        imgTitle: 'a-sn',
        bgColor: 'rgb(213,189,224)',
        h1Color: 'rgb(77,37,87)',
        font: 'Mina',
        ovInfo: ['October 25, 2010', '14', 'Country pop, pop rock, power pop, soft rock', 'Big Machine Records',
            'Taylor Swift, Nathan Chapman, Dean Gillard, Matt Ward'],
        tvInfo: ['July 7, 2023', '22', 'Arena rock, country pop, folk pop, gothic rock, pop punk, pop rock, power pop, soft rock', 
            'Republic Records', 'Taylor Swift, Jack Antonoff, Aaron Dessner, Christopher Rowe'],
        ovEditions: [['Deluxe', 'October 25, 2010', 'edtn-sn-dlx'], ['Karaoke', 'December 20, 2010', 'edtn-sn-kr'], ['Karaoke <span>(Digital)</span>', '2010', 'edtn-sn-kr-alt'], ['Speak Now: World Tour Live', 'November 21, 2011', 'a-snwtl-l'],
            ['Speak Now: World Tour Live <span>(Brazilian Edition)</span>', 'November 21, 2011', 'a-snwtl-l'], ['Speak Now: World Tour Live <span>(Deluxe)</span>', 'November 21, 2011', 'a-snwtl-l-dlx'], ['Big Machine Radio Release Special', 'December 13, 2018', 'edtn-sn-bmrrs']],
        tvEditions: [['Digital Deluxe', 'July 13, 2023', 'edtn-sn-tv-dlx']]
    },
    {
        id: 'red',
        title: 'Red',
        imgTitle: 'a-red',
        bgColor: 'rgb(210,179,160)',
        h1Color: 'rgb(105,31,22)',
        font: 'Kapra',
        ovInfo: ['October 22, 2012', '16', 'Arena rock, country pop, dance pop, EDM, folk-pop, pop rock, soft rock', 'Big Machine Records',
            'Scott Borchetta <span>(executive producer)</span>, Taylor Swift, Jeff Bhasker, Nathan Chapman, Dann Huff, Jacknife Lee, Max Martin, Butch Walker, Dan Wilson, Shellback'],
        tvInfo: ['November 12, 2021', '30', 'Country, country pop, country rock, soft rock, dance pop', 'Republic Records',
            'Taylor Swift <span>(executive producer)</span>, Elvira Anderfjärd, Jack Antonoff, Jeff Bhasker, Tim Blacksmith, Aaron Dessner, Danny D, Jacknife Lee, Paul Mirkovich, Christopher Rowe, Butch Walker, Dan Wilson, Espionage, Shellback'],
        ovEditions: [['Deluxe', 'October 22, 2012', 'edtn-red-dlx'], ['Karaoke', '2013', 'edtn-red-kr'], ['Big Machine Radio Release Special', 'December 13, 2018', 'edtn-red-bmrrs']],
        tvEditions: [['Could You Be The One Chapter', 'January 13, 2022', 'c-red-tv-cybto'], ['She Wrote A Song About Me Chapter', 'January 18, 2022', 'c-red-tv-swasam'],
            ['The Slow Motion Chapter', 'January 25, 2022', 'c-red-tv-sm'], ['From The Vault Chapter', 'January 31, 2022', 'c-red-tv-ftv'], 
            ['The More Red (Taylor\'s Version) Chapter', 'March 17, 2023', 'c-red-tv-mrtv']]
    },
    {
        id: '_1989',
        title: '1989',
        imgTitle: 'a-1989',
        bgColor: 'rgb(165,198,227)',
        h1Color: 'rgb(100,165,207)',
        font: 'Permanent Marker',
        ovInfo: ['October 27, 2014', '13', 'Electropop, synth-pop', 'Big Machine Records',
            'Taylor Swift, Max Martin <span>(executive producers)</span>, Jack Antonoff, Nathan Chapman, Imogen Heap, Greg Kurstin, Ali Payami, Ryan Tedder, Noel Zancanella, Mattman & Robin, Shellback'],
        tvInfo: ['October 27, 2023', '21', 'Dream pop, electropop, soft rock, synth-pop', 'Republic Records',
            'Taylor Swift, Jack Antonoff, Aaron Dessner, Christopher Rowe'],
        ovEditions: [['Deluxe', 'October 27, 2014', 'edtn-1989-dlx'], ['International', 'October 27, 2014', 'edtn-1989-int'], ['International <span>(Deluxe)</span>', 'October 27, 2014', 'edtn-1989-dlx-int'],
            ['Karaoke', 'October 27, 2014', 'edtn-1989-kr'], ['Karaoke <span>(Deluxe)</span>', 'October 27, 2014', 'edtn-1989-kr-dlx'], ['Big Machine Radio Release Special', 'December 13, 2018', 'edtn-1989-bmrrs']],
        tvEditions: [['Deluxe', 'October 27, 2023', 'edtn-1989-tv-dlx'], ['Sunrise Boulevard Yellow', 'October 27, 2023', 'edtn-1989-tv-sby'], ['Aquamarine Green', 'October 27, 2023', 'edtn-1989-tv-ag'], 
            ['Rose Garden Pink', 'October 27, 2023', 'edtn-1989-tv-rgp'], ['Tangerine', 'October 27, 2023', 'edtn-1989-tv-t'], ['Deluxe+', 'November 9, 2023', 'edtn-1989-tv-dlx+']]
    },
    {
        id: 'reputation',
        title: 'reputation',
        imgTitle: 'a-rep',
        bgColor: 'rgb(134,130,131)',
        h1Color: 'rgb(30,30,30)',
        font: 'OPTIEngraversOldEnglish',
        ovInfo: ['November 10, 2017', '15', 'EDM, electropop, hip hop, R&B, synth-pop, trap-pop, pop-rap', 'Big Machine Records',
            'Taylor Swift <span>(executive producer)</span>, Jack Antonoff, Max Martin, Ali Payami, Shellback'],
        tvInfo: [],
        ovEditions: [['Karaoke', 'November 10, 2017', 'edtn-rep-kr'], ['Big Machine Radio Release Special', 'December 13, 2018', 'edtn-rep-bmrrs']],
        tvEditions: []
    },
    {
        id: 'lover',
        title: 'Lover',
        imgTitle: 'a-lover',
        bgColor: 'rgb(245,185,211)',
        h1Color: 'rgb(219,72,130)',
        font: 'Satisfy',
        ovInfo: ['August 23, 2019', '18', 'Alternative pop, bubblegum pop, country, electropop, synth-pop, indie-pop', 'Republic Records',
            'Taylor Swift <span>(executive producer)</span>, Jack Antonoff, Louis Bell, Frank Dukes, Joel Little'],
        ovEditions: [['Deluxe', 'August 24, 2019', 'a-lover'], ['Live from Paris', 'May 17, 2020', 'a-loverlfp-l'], ['The More Lover Chapter', 'March 17, 2023', 'c-lover-ml']]
    },
    {
        id: 'folklore',
        title: 'folklore',
        imgTitle: 'a-folk',
        bgColor: 'rgb(209,208,213)', 
        h1Color: 'rgb(126,121,115)',
        font: 'IM Fell DW Pica',
        ovInfo: ['July 24, 2020', '16', 'Alternative rock, chamber pop, dream pop, folk-pop, indie folk, folk, ballad', 'Republic Records',
            'Taylor Swift <span>(executive producer)</span>, Jack Antonoff, Aaron Dessner'],
        ovEditions: [['in the weeds', 'July 24, 2020', 'edtn-folk-itw'], ['meet me behind the mall', 'July 24, 2020', 'edtn-folk-mmbtm'], ['betty\'s garden', 'July 24, 2020', 'edtn-folk-bg'], ['stolen lullabies', 'July 24, 2020', 'edtn-folk-sl'],
            ['hide-and-seek', 'July 24, 2020', 'edtn-folk-has'], ['running like water', 'July 24, 2020', 'edtn-folk-rlw'], ['clandestine meetings', 'July 24, 2020', 'edtn-folk-cm'], ['the escapism chapter', 'August 21, 2020', 'c-folk-e'], ['the sleepless nights chapter', 'August 24, 2020', 'c-folk-sn'],
            ['the saltbox house chapter', 'August 27, 2020', 'c-folk-sh'], ['the yeah I showed up at your party chapter', 'September 21, 2020', 'c-folk-eisuayp'], ['the long pond studio sessions <span>(from the Disney+ special)</span>', 'November 25, 2020', 'a-folktlpssftds-l'], 
            ['the long pond studio sessions <span>(from the Disney+ special) [deluxe]</span>', 'November 25, 2020', 'a-folktlpssftds-l'], ['the long pond studio sessions <span>(from the Disney+ special) [Record Store Day Exclusive]</span>', 'April 22, 2023', 'a-folktlpssftds-l-rsde']]
    },
    {
        id: 'evermore',
        title: 'evermore',
        imgTitle: 'a-ever',
        bgColor: 'rgb(199,174,146)',
        h1Color: 'rgb(137, 71, 37)',
        font: 'IM Fell DW Pica',
        ovInfo: ['December 11, 2020', '15', 'Alternative rock, chamber rock, country rock, folk pop, indie folk', 'Republic Records',
            'Taylor Swift, Jack Antonoff, BJ Burton, Aaron Dessner, Bryce Dessner, James McAlister'],
        ovEditions: [['Deluxe', 'December 18, 2020', 'a-ever'], ['Japanese', 'January 22, 2021', 'a-ever'], ['digitally autographed fan V1', 'June 3, 2021', 'edtn-ever-daf1'], ['digitally autographed fan V2', 'June 3, 2021', 'edtn-ever-daf2'],
            ['digitally autographed fan V3', 'June 3, 2021', 'edtn-ever-daf3'], ['digitally autographed fan V4', 'June 3, 2021', 'edtn-ever-daf4'], ['“dropped your hand while dancing” chapter', 'January 21, 2021', 'c-ever-dyhwd'],
            ['“forever is the sweetest con” chapter', 'January 28, 2021', 'c-ever-fitsc'], ['“ladies lunching” chapter', 'February 4, 2021', 'c-ever-ll']]
    },
    {
        id: 'midnights',
        title: 'Midnights',
        imgTitle: 'a-mid',
        bgColor: 'rgb(154,180,196)',
        h1Color: 'rgb(37,46,73)',
        font: 'NeueHaasDisplay',
        ovInfo: ['October 21, 2022', '13', 'Alternative pop, dream pop, electronica, electropop, synth-pop, pop rock, bedroom pop', 'Republic Records',
            'Taylor Swift, Jack Antonoff, Keanu Beats, Braxton Cook, Aaron Dessner, Jahaan Sweet, Sounwave'],
        ovEditions: [['Clean', 'October 21, 2022', 'edtn-mid-cln'], ['Lavender', 'October 21, 2022', 'edtn-mid-l'], ['3am', 'October 21, 2022', 'edtn-mid-3am'], ['Clean 3am', 'October 21, 2022', 'edtn-mid-3am-cln'], ['Jade Green', 'October 21, 2022', 'edtn-mid-jg'],
            ['Blood Moon', 'October 21, 2022', 'edtn-mid-bm'], ['Mahogany', 'October 21, 2022', 'edtn-mid-m'], ['+ Anti-Hero <span>(Behind The Song)</span>', 'January 7, 2023', 'edtn-mid-abts'], ['+ Bejeweled <span>(Behind The Song)</span>', 'January 7, 2023', 'edtn-mid-bbts'],
            ['+ Karma <span>(Behind The Song)</span>', 'January 7, 2023', 'edtn-mid-kbts'], ['+ Mastermind <span>(Behind The Song)</span>', 'January 7, 2023', 'edtn-mid-mbts'], ['Behind The Songs', 'January 7, 2023', 'edtn-mid-bts'], ['The Till Dawn', 'May 26, 2023', 'edtn-mid-ttd'], ['The Late Night', 'May 26, 2023', 'edtn-mid-tln']]
    },
    {
        id: 'ttpd',
        title: 'THE TORTURED POETS DEPARTMENT',
        imgTitle: 'a-ttpd',
        bgColor: 'rgb(239,238,234)',
        h1Color: 'rgb(98,85,72)',
        font: 'Big Caslon',
        ovInfo: ['April 19, 2024', '16', 'Synth pop, dream pop, folk, folk pop, chamber pop, indie rock, soft rock, alternative country', 'Republic Records',
            'Taylor Swift, Jack Antonoff, Aaron Dessner, Patrik Berger'],
        ovEditions: [['The Manuscript', 'April 19, 2024', 'a-ttpd'], ['The Bolter', 'April 19, 2024', 'edtn-ttpd-tb'], ['The Albatross', 'April 19, 2024', 'edtn-ttpd-ta'], ['The Black Dog', 'April 19, 2024', 'edtn-ttpd-tbd'], ['THE ANTHOLOGY', 'April 19, 2024', 'a-ttpd-ta'], ['+ But Daddy I Love Him <span>(Acoustic Version)</span>', 'May 8, 2024', 'edtn-ttpd-bdilhav'],
            ['+ Cassandra <span>(First Draft Phone Memo)</span>', 'May 17, 2024', 'edtn-ttpd-cfdpm'], ['+ Who\'s Afraid of Little Old Me? <span>(First Draft Phone Memo)</span>', 'May 17, 2024', 'edtn-ttpd-waolomfdpm'], ['+ The Black Dog <span>(First Draft Phone Memo)</span>', 'May 17, 2024', 'edtn-ttpd-tbdfdpm'], 
            ['+ loml <span>(Live From Paris)</span>', 'May 23, 2024', 'edtn-ttpd-llfp'], ['+ The Alchemy X Threacherous Mashup <span>(Live From Paris)</span>', 'May 23, 2024', 'edtn-ttpd-tatmlfp'], ['+ My Boy Only Breaks His Favorite Toys <span>(Live From Paris)</span>', 'May 23, 2024', 'edtn-ttpd-mbobhftlfp'],
            ['+ Fortnight <span>(Acoustic Version)</span>', 'June 10, 2024', 'edtn-ttpd-fav'], ['+ Fresh Out The Slammer <span>(Acoustic Version)</span>', 'June 10, 2024', 'edtn-ttpd-fotsav'], ['+ Down Bad <span>(Acoustic Version)</span>', 'July 1, 2024', 'edtn-ttpd-dbav'], ['+ Guilty as Sin? <span>(Acoustic Version)</span>', 'July 1, 2024', 'edtn-ttpd-gasav'],
            ['+ How Did It End? <span>(Live From Stockholm)</span>', 'July 11, 2024', 'edtn-ttpd-hdielfs'], ['+ Guilty as Sin? <span>(Live From Stockholm)</span>', 'July 11, 2024', 'edtn-ttpd-gaslfs'], ['+ Peter <span>(Live From Stockholm)</span>', 'July 11, 2024', 'edtn-ttpd-plfs']],
        ovSingles: []
    }
]

let rowNode = document.querySelector(`#main .row`);

if (rowNode) {
    for (let i = 0; i < albumsInfo.length; i++) { 
        let info = albumsInfo[i];
        rowNode.innerHTML += `<div class="col">
                                <section class="album-card ${info.id}">
                                    <h1>${info.title}</h1>
                                    <div>
                                        <img src="assets/images/${info.id}/${info.imgTitle}.png" />
                                        <a href="albums/${info.id}.html">Learn more...</a>
                                    </div>
                                </section>
                              </div>`;
        if (i > 0 && i < 5) {
            rowNode.querySelector(`.${info.id} img`).src=`assets/images/${info.id}/${info.imgTitle}-tv.png`;
        }
        let idNode = document.querySelector(`#main .${info.id}`);
        idNode.style.backgroundColor = info.bgColor;
        idNode.querySelector(`h1`).style.backgroundColor = info.h1Color;
        idNode.querySelector(`h1`).style.fontFamily = info.font;
    
        let divNode = idNode.querySelector(`div`);
        divNode.style.border = `3px solid ${info.bgColor}`;
        divNode.style.borderTop = `none`;
        divNode.querySelector(`a`).style.textShadow = `2px 2px 1px ${info.h1Color}`;
        divNode.querySelector(`img`).style.boxShadow = `0 0 30px 3px ${info.h1Color}`;
    }
    
    let sectionNodes = document.querySelectorAll(`section`);
    sectionNodes.forEach((section, index) => {
        let divNode = section.querySelector(`div`);
    
        section.addEventListener(`mouseover`, () => {
            divNode.style.border = `3px solid ${albumsInfo[index].h1Color}`;
            divNode.style.borderTop = `none`;
        });
        
        section.addEventListener(`mouseout`, () => {
            divNode.style.border = `3px solid ${albumsInfo[index].bgColor}`;
            divNode.style.borderTop = `none`;
        });
    })
}

for (let i = 0; i < albumsInfo.length; i++) {
    let info = albumsInfo[i];
    let bodyNode = document.querySelector(`#${info.id}.album`);
    if (bodyNode) {
        bodyNode.innerHTML += `
        <header>
            <h1>${info.title}</h1>
        </header>
        <main>
            <div class="content">
                <section>
                    <h2>Original Version</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item gen-info">
                            <h3 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    General Information
                                </button>
                            </h3>
                            <div id="collapseOne" class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    <div class="d-flex align-items-center flex-wrap flex-lg-nowrap">
                                        <img src="../assets/images/${info.id}/${info.imgTitle}.png">
                                        <ul>
                                            <li><span>Release date:</span> ${info.ovInfo[0]}</li>
                                            <li><span>Number of songs:</span> ${info.ovInfo[1]}</li>
                                            <li><span>Genre:</span> ${info.ovInfo[2]}</li>
                                            <li><span>Label:</span> ${info.ovInfo[3]}</li>
                                            <li><span>Producers:</span> ${info.ovInfo[4]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item editions">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Editions
                                </button>
                            </h3>
                            <div id="collapseTwo" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <div class="row row-cols-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>`;
        for (let i = 0; i < info.ovEditions.length; i++) {
            bodyNode.querySelector(`.editions .row`).innerHTML += `
            <div class="col">
                <article>
                    <img src="../assets/images/${info.id}/${info.ovEditions[i][2]}.png">
                    <h4>${info.ovEditions[i][0]}</h4>
                    <p>${info.ovEditions[i][1]}</p>
                </article>
            </div>
            `
        }
        if (i > 0 && i < 5) {
            bodyNode.querySelector(`.content`).innerHTML += `
                <section class="tv">
                    <h2>Taylor's Version</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item gen-info">
                            <h3 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneTv" aria-expanded="true" aria-controls="collapseOneTv">
                                    General Information
                                </button>
                            </h3>
                            <div id="collapseOneTv" class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    <div class="d-flex align-items-center flex-wrap flex-lg-nowrap">
                                        <img src="../assets/images/${info.id}/${info.imgTitle}-tv.png">
                                        <ul>
                                            <li><span>Release date:</span> ${info.tvInfo[0]}</li>
                                            <li><span>Number of songs:</span> ${info.tvInfo[1]}</li>
                                            <li><span>Genre:</span> ${info.tvInfo[2]}</li>
                                            <li><span>Label:</span> ${info.tvInfo[3]}</li>
                                            <li><span>Producers:</span> ${info.tvInfo[4]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item editions">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTv" aria-expanded="false" aria-controls="collapseTwoTv">
                                    Editions
                                </button>
                            </h3>
                            <div id="collapseTwoTv" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <div class="row row-cols-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
            for (let i = 0; i < info.tvEditions.length; i++) {
                bodyNode.querySelector(`.tv .editions .row`).innerHTML += `
                <div class="col">
                    <article>
                        <img src="../assets/images/${info.id}/${info.tvEditions[i][2]}.png">
                        <h4>${info.tvEditions[i][0]}</h4>
                        <p>${info.tvEditions[i][1]}</p>
                    </article>
                </div>
                `
            }
        }
        bodyNode.querySelector(`header`).style.backgroundColor = info.h1Color;
        bodyNode.querySelector(`h1`).style.fontFamily = info.font;
        bodyNode.querySelector(`main`).style.backgroundImage = `linear-gradient(${info.h1Color}, ${info.bgColor})`;
        bodyNode.querySelector(`main`).style.textShadow = `2px 2px 1px ${info.h1Color}`;
        let buttonNodes = document.querySelectorAll(`main .accordion button`);
        buttonNodes.forEach((section, index) => {
            section.style.textShadow = `2px 2px 1px ${info.h1Color}`;
        })
    }
}