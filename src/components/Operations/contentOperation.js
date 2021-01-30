import slideFrez1 from '../../assets/imgs/frezStan.jpg'
import slideFrez2 from '../../assets/imgs/cncFrezStan.jpg'

import slideTokar1 from '../../assets/imgs/tokarStan.jpg'
import slideTokar2 from '../../assets/imgs/verticalTurningLathe.jpg'
import slideTokar3 from '../../assets/imgs/cncLathe.jpg'

//import backgroundImageTokar from '../../assets/imgs/tokar.png'
//import backgroundImageMilling from '../../assets/imgs/frezer.png'

import slideBoring1 from '../../assets/imgs/Boring1.jpg'
import slideBoring2 from '../../assets/imgs/Boring2.jpg'

import slideGrinding1 from '../../assets/imgs/grinding1.jpg'
import slideGrinding2 from '../../assets/imgs/grinding2.jpg'

import slideGearCutting from '../../assets/imgs/slideGearCutting.jpg'
import thermal from '../../assets/imgs/thermali.jpg'
import thermal2 from '../../assets/imgs/thermali2.jpg'
import welding from '../../assets/imgs/welding2.jpg'
import slidePlasmaLaserCutting1 from '../../assets/imgs/slidePlasmaLaserCutting1.jpg'
import slidePlasmaLaserCutting2 from '../../assets/imgs/slidePlasmaLaserCutting2.jpg'
import slideElectroerosiveCutting from '../../assets/imgs/slideElectroerosiveCutting.jpg'
import slideSheetBending from '../../assets/imgs/slideSheetBending.jpg'




const  dataFromSliderTokar =  [
    {
        title: " Параметры обрабатываемых деталей для универсальных токарно-винторезных станков:",
        titleParam1: "диаметр обработки: ",
        param1: "от 5мм до 2500 мм",
        titleParam2: "длина обработки: ",
        param2: "от 10мм до 8000 мм",
        titleParam3: "точность обработки: ",
        param3: "до 0,005мм на диаметральные размеры",
        titleParam4: "шероховатость поверхности: ",
        param4: "до Ra 1.6",

        image: slideTokar1,

    },{
        title: " Параметры обрабатываемых деталей для токарно-карусельных станков:",
        titleParam1: "диаметр обработки: ",
        param1: "до 2300мм при методе крепления детали «на разжим»",
        titleParam2: "высота обработки: ",
        param2: "до 1000мм",
        titleParam3: "точность обработки: ",
        param3: "до 0,01мм",
        titleParam4: "шероховатость поверхности: ",
        param4: "до Ra 3.2",

        image: slideTokar2,

    },{
        title: "Параметры обрабатываемых деталей для обрабатывающих центров с ЧПУ:",
        titleParam1: "диаметр обработки: ",
        param1: "от 10мм до 320мм",
        titleParam2: "длина обработки: ",
        param2: "до 750мм",
        titleParam3: "точность обработки: ",
        param3: "до 0,005мм",
        titleParam4: "шероховатость поверхности: ",
        param4: "до Ra 1.25",

        image: slideTokar3,

    },

];

const  dataFromSliderFrez =  [
    {
        title: "Параметры обрабатываемых деталей на универсально-фрезерных станках:",
        titleParam1: "длина обработки: ",
        param1: "до 1600мм",
        titleParam2: "ширина обработки: ",
        param2: "до 600мм",
        titleParam3: "высота обрабатываемой детали: ",
        param3: "до 400мм",
        titleParam4: "точность обработки: ",
        param4: "до 0,01мм",
        titleParam5: "шероховатость поверхности: ",
        param5: "до Ra 1.6",

        image: slideFrez1,

    },{
        title: " Параметры обрабатываемых деталей на обрабатывающих центрах с ЧПУ:",
        titleParam1: "длина обработки: ",
        param1: "до 750мм",
        titleParam2: "ширина обработки: ",
        param2: "до 400мм",
        titleParam3: "высота обрабатываемой детали: ",
        param3: "до 400мм",
        titleParam4: "точность обработки: ",
        param4: "до до 0,005мм",
        titleParam5: "шероховатость поверхности: ",
        param5: "до Ra 1.25",

        image: slideFrez2,

    },


];

export const  dataFromTurningOperation =
     {
        title: " Токарная обработка",
        description: "Токарная обработка — это механическая обработка резанием наружных и внутренних поверхностей вращения, в том числе цилиндрических и конических, торцевание, отрезание, снятие фасок, обработка галтелей, прорезание канавок, нарезание внутренних и наружных резьб на токарных станках. Точение, наиболее распространенный метод изготовления деталей типа тел вращения (валов, дисков, осей, пальцев, цапф, фланцев, колец, втулок, гаек, муфт и др.) на токарных станках. Наша компания располагает широкими возможностями по токарной обработке деталей на универсальных токарно-винторезных станках, токарно-карусельных станках и на обрабатывающих центрах с ЧПУ.",
        dataFromSlider: dataFromSliderTokar,
        //backgroundImage: backgroundImageTokar

    };
export const  dataFromMillingOperation =
    {
        title: "Фрезерная обработка",
        description: "Фрезерование (фрезерная обработка) — это механическая обработка резанием плоскостей, пазов, лысок, при которой режущий инструмент (фреза) совершает вращательное движение, а обрабатываемая заготовка — поступательное. Наша компания располагает как универсально-фрезерными станками (позволяющие осуществлять горизонтальное и вертикальное фрезерование, а также фрезерование под разными углами различным инструментом в ручном и полу-автоматическом режиме) так и фрезерными трех-осевыми обрабатывающими центрами с ЧПУ (позволяющие осуществлять горизонтальное и вертикальное фрезерование, а также фрезерование под разными углами различным инструментом в автоматическом режиме).",
        dataFromSlider: dataFromSliderFrez,
        //backgroundImage: backgroundImageMilling

    };


const dataFromBoring = [
    {

        title: "Параметры обрабатываемых деталей на горизонтально-расточных станках:",
        titleParam1: "размер детали по оси Х: ",
        param1: "до 3000мм",
        titleParam2: "размер детали по оси Y: ",
        param2: "до 3000мм",
        titleParam3: "размер детали по оси Z: ",
        param3: "до 5000мм",
        titleParam4: "точность обработки: ",
        param4: "до 0,01мм",
        titleParam5: "шероховатость поверхности: ",
        param5: "до Ra 3.2",
        image: slideBoring1,

    },
    {

        title: "Параметры обрабатываемых деталей на горизонтально-расточных станках:",
        titleParam1: "размер детали по оси Х: ",
        param1: "до 3000мм",
        titleParam2: "размер детали по оси Y: ",
        param2: "до 3000мм",
        titleParam3: "размер детали по оси Z: ",
        param3: "до 5000мм",
        titleParam4: "точность обработки: ",
        param4: "до 0,01мм",
        titleParam5: "шероховатость поверхности: ",
        param5: "до Ra 3.2",
        image: slideBoring2,

    },
    ];
export const  dataFromBoringOperation =
    {
        title: "Расточные работы",
        description: "Расточные работы — выполняются на группе металлорежущих расточных станков, предназначенных для обработки заготовок крупных размеров в условиях мелкосерийного и серийного производства. На этих станках можно производить растачивание, сверление, зенкование, нарезание внутренней и наружной резьб, обтачивание цилиндрических поверхностей, подрезку торцов, цилиндрическое и торцовое фрезерование. На расточных станках можно произвести окончательную обработку заготовки корпусной детали без перестановки её на другие станки. Наша компания располагает рядом горизонтально-расточных станков позволяющих обрабатывать различные корпусные детали.",
        dataFromSlider: dataFromBoring,
        backgroundImage: null

    };

const dataFromGrinding = [
    {

        title: "Параметры обрабатываемых деталей на плоско-шлифовальных станках:",
        titleParam1: "максимальная длина детали: ",
        param1: "3000мм",
        titleParam2: "максимальная ширина детали: ",
        param2: "2000мм",

        image: slideGrinding1,

    },
    {

        title: "Параметры обрабатываемых деталей на круглошлифовальных станках:",
        titleParam1: "максимальный обрабатываемый диаметр: ",
        param1: "до 3000мм",
        titleParam2: "максимальная длина: ",
        param2: "до 6000мм",

        image: slideGrinding2,

    },
];
export const  dataFromGrindingOperation =
    {
        title: "Шлифовка",
        description: "Шлифование — механическая обработка материала абразивным методом, которая, в свою очередь, является разновидностью резания. Механическое шлифование обычно используется для обработки твёрдых и хрупких материалов в заданный размер с точностью до микрона. А также для достижения наименьшей шероховатости поверхности изделия. В качестве охлаждения обычно используют смазочно-охлаждающие жидкости (СОЖ).",
        dataFromSlider: dataFromGrinding,
        backgroundImage: null

    };


export const  dataFromGearCuttingOperation =
    {
        title: "Зубонарезные работы",
        description: "Зубофрезерование – один из видов лезвийной обработки, обеспечивающий нарезание зубчатых колес эвольвентного профиля: цилиндрических (прямозубых и косозубых) колес внешнего зацепления, червячных колес. Операция зубофрезерования выполняется на специальных зубофрезерных станках, обеспечивая высокую точность и качество поверхности детали. Режущий инструмент, используемый для обработки заготовок – червячная модульная фреза.",
        description2:"Зубофрезерование осуществляется специальным инструментом – червячной модульной фрезой. Этот режущий инструмент представляет собой винт с резьбой трапецеидального профиля, с прорезанными в нем перпендикулярно витку канавками, которые образуют ряды зубчатых реек. Число прорезанных канавок соответствует числу реек. Червячные фрезы бывают черновыми, чистовыми и повышенной точности для обработки зубчатых колес 7-й степени точности. Основными геометрическими параметрами фрезы являются наружный диаметр зубчатого колеса и модуль. Значения модуля являются стандартными. В машиностроении используются следующие значения модуля, мм: 0.8; 1.0; 1.25; 1.5; 2.0; 3.0; 4.0; 5.0; 6.0; 8.0; 10.0",
        dataFromSlider: null,
        backgroundImage: null,
        subtitle: "Параметры нарезаемых деталей: ",
        titleParam1: "максимальный нарезаемый модуль: ",
        param1: "10",
        titleParam2: "максимальный нарезаемый диаметр: ",
        param2: "800мм",
        titleParam3: "максимальная высота обрабатываемой детали: ",
        param3: "400мм",
        image: slideGearCutting,
    };

export const  dataFromThermalOperation =
    {
        title: "Термическая обработка",
        description: "Термической обработкой называется совокупность операций нагрева, выдержки и охлаждения твёрдых металлических сплавов с целью получения заданных свойств за счёт изменения внутреннего строения и структуры. Тепловая обработка используется либо в качестве промежуточной операции для улучшения обрабатываемости давлением, резанием, либо как окончательная операция технологического процесса, обеспечивающая заданный уровень свойств изделия.",
        description2:"Наше предприятие имеет возможность проведения в камерных электро-печах закалки (на воду, на масло), отжига, нормализации и старения деталей габаритными размерами 600х800х400 мм и температурным режимом до 1100˚. Так же имеется возможность проведения поверхностной ТВЧ закалки изделий с охлаждением в соляных изотермических ваннах.",
        dataFromSlider: null,
        backgroundImage: null,
        //subtitle: "Параметры нарезаемых деталей: ",
        //titleParam1: "максимальный нарезаемый модуль: ",
        //param1: "10",
        //titleParam2: "максимальный нарезаемый диаметр: ",
        //param2: "800мм",
        //titleParam3: "максимальная высота обрабатываемой детали: ",
        //param3: "400мм",
        image: thermal,
        image2: thermal2,
    };

export const  dataFromWeldingOperation =
    {
        title: "Сварочные работы",
        description: "Сварка — процесс получения неразъёмных соединений посредством установления межатомных связей между свариваемыми частями при их местном или общем нагреве, пластическом деформировании или совместном действии того и другого. В настоящее время различают более 150 видов и способов сварочных процессов. Существуют различные классификации этих процессов. Так, ГОСТ 19521-74 предусматривает классификацию сварки металлов по основным группам признаков: физическим, техническим и технологическим.",
        description2:"Основным физическим признаком сварки является форма и вид энергии, используемой для получения сварного соединения. Форма энергии определяет класс сварки, а её вид — вид сварки. Имеются три класса сварки: Термический класс: виды сварки, осуществляемые плавлением с использованием тепловой энергии — газовая, дуговая, электронно-лучевая, лазерная и др. Термомеханический класс: виды сварки, осуществляемые с использованием тепловой энергии и давления — контактная, диффузионная, газо- и дугопрессовая, кузнечная и др. Механический класс: виды сварки, осуществляемые с использованием механической энергии — холодная, трением, ультразвуковую, взрывом и др. К техническим признакам относятся: способ защиты металла в зоне сварки, непрерывность процесса, степень его механизации. Классификация по технологическим признакам устанавливается для каждого вида сварки отдельно (по виду электрода, роду сварочного тока и т. д.).",
        dataFromSlider: null,
        backgroundImage: null,
        subtitle: "На нашем предприятии используются следующие виды сварки: ",
        titleParam1: "ручная электродуговая сварка ",
        //param1: "10",
        titleParam2: "полуавтоматическая сварка в среде защитных газов (СО 2 ) ",
        //param2: "800мм",
        titleParam3: "аргонно-дуговая сварка не плавящимся электродом ",
        //param3: "400мм",
        image: welding,
        //image2: thermal2,
    };

const dataFromPlasmaLaserCutting = [
    {

        title: "Параметры плазменной резки с ЧПУ:",
        titleParam1: "ширина реза: ",
        param1: "до 1500мм",
        titleParam2: "длина реза: ",
        param2: "до 3000мм",
        titleParam3: "толщина реза: ",
        param3: "до 40мм",
        //titleParam4: "точность обработки: ",
        //param4: "до 0,01мм",
        //titleParam5: "шероховатость поверхности: ",
        //param5: "до Ra 3.2",
        image: slidePlasmaLaserCutting1,

    },
    {

        title: "Параметры лазерной резки с ЧПУ:",
        titleParam1: "ширина реза: ",
        param1: "до 2000мм",
        titleParam2: "длина реза: ",
        param2: "до 6000мм",
        titleParam3: "толщина реза: ",
        param3: "до 6мм",
        //titleParam4: "точность обработки: ",
        //param4: "до 0,01мм",
        //titleParam5: "шероховатость поверхности: ",
        //param5: "до Ra 3.2",
        image: slidePlasmaLaserCutting2,

    },
];
export const  dataFromPlasmaLaserCuttingOperation =
    {
        title: "Плазменная и лазерная резка",
        description: "Плазменная резка — вид плазменной обработки материалов, при котором в качестве режущего инструмента вместо резца используется струя плазмы. Между электродом и соплом аппарата, или между электродом и разрезаемым металлом зажигается электрическая дуга. В сопло подаётся газ под давлением в несколько атмосфер, превращаемый электрической дугой в струю плазмы с температурой от 5000 до 30000 градусов и скоростью от 500 до 1500 м/с. Форсунки охлаждаются потоком газа, воздушное охлаждение.",
        description2: "Лазерная резка — технология резки и раскроя металлов, использующая лазер высокой мощности. Сфокусированный лазерный луч, управляемый компьютером, обеспечивает высокую концентрацию энергии и позволяет разрезать практически любые материалы независимо от их теплофизических свойств. В процессе резки, под воздействием лазерного луча материал разрезаемого участка плавится, возгорается, испаряется или выдувается струей газа. При этом можно получить узкие резы с минимальной зоной термического влияния. Лазерная резка отличается отсутствием механического воздействия на обрабатываемый материал, возникают минимальные деформации, как временные в процессе резки, так и остаточные после полного остывания. Вследствие этого лазерную резку, даже легкодеформируемых и нежестких заготовок и деталей, можно осуществлять с высокой степенью точности. Благодаря большой мощности лазерного излучения обеспечивается высокая производительность процесса в сочетании с высоким качеством поверхностей реза. Легкое и сравнительно простое управление лазерным излучением позволяет осуществлять лазерную резку по сложному контуру плоских и объемных деталей и заготовок с высокой степенью автоматизации процесса.",
        dataFromSlider: dataFromPlasmaLaserCutting,
        backgroundImage: null

    };

export const  dataFromElectroerosiveCuttingOperation =
    {
        title: "Электроэрозионная резка",
        description: "Электроэрозионная обработка  — обработка, заключающаяся в изменении формы, размеров, шероховатости и свойств поверхности электропроводной заготовки под действием электрических разрядов, возникающих между заготовкой и электродом-инструментом.",
        description2:"Один из электродов является обрабатываемой заготовкой, другой — электрод-инструментом. Разряды производятся периодически, импульсно, так чтобы среда между электродами восстановила свою электрическую прочность. Для данного вида обработки мы используем электроэрозионный проволочно-вырезной станок Accutex AU-300iA погружного типа.",
        dataFromSlider: null,
        backgroundImage: null,
        subtitle: "Параметры обрабатываемой детали: ",
        titleParam1: "максимальные размеры заготовки (ДхШхВ): ",
        param1: "765х535х215мм",
        titleParam2: "перемещение осей X/Y/Z: ",
        param2: "350х250х220мм",
        titleParam3: "максимальный вес заготовки: ",
        param3: "300кг",
        titleParam4: "максимальный угол конусного резания: ",
        param4: "±22,5˚",
        image: slideElectroerosiveCutting,
    };

export const  dataFromSheetBendingOperation =
    {
        title: "Листогибочные работы",
        description: "Листогиб применяется в машиностроении для производства различных замкнутых и незамкнутых профилей, коробов, коробок, а также цилиндров, конусов и т. д. Основное предназначение листогибов — изготовление различных изделий из листовых материалов.",
        description2:"Листогибочный пресс — станок, представляющий собой машину, развивающую усилие, применяемое для производственных целей, для гибки изделий из листового металла. Характеризуется основными параметрами, такими как развиваемое усилие, рабочая длина; так и дополнительными параметрами: амплитуда хода траверсы, скорость работы (процесса гибки), расстояние между стойками станины, наличием устройства компенсации прогиба стола, наличием дополнительных приспособлений, улучшающих производительность и удобство в работе, таких как поддержка заготовки, датчик полученного угла гиба, система программирования и пр.",
        dataFromSlider: null,
        backgroundImage: null,
        subtitle: "Параметры листогибочного пресса с ЧПУ: ",
        titleParam1: "ширина гиба: ",
        param1: "до 3000мм",
        titleParam2: "максимальная толщина обрабатываемого листа: ",
        param2: "до 8мм",
        titleParam3: "максимальное усилие: ",
        param3: "до 100тонн",
        titleParam4: "угол гиба: ",
        param4: "от 30° до 180°",
        titleParam5: "точность гиба: ",
        param5: "±0,1мм",
        image: slideSheetBending,
    };
