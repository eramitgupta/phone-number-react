import { useState } from 'react';

const countries = [
    {
        name: 'afghanistan',
        key: 'afghanistan',
        countryCodes: ['93'],
        isoCode2: 'AF',
        isoCode3: 'AFG'
    },
    {
        name: 'albania',
        key: 'albania',
        countryCodes: ['355'],
        isoCode2: 'AL',
        isoCode3: 'ALB'
    },
    {
        name: 'algeria',
        key: 'algeria',
        countryCodes: ['213'],
        isoCode2: 'DZ',
        isoCode3: 'DZA'
    },
    {
        name: 'american samoa',
        key: 'american-samoa',
        countryCodes: ['1684'],
        isoCode2: 'AS',
        isoCode3: 'ASM'
    },
    {
        name: 'andorra',
        key: 'andorra',
        countryCodes: ['376'],
        isoCode2: 'AD',
        isoCode3: 'AND'
    },
    {
        name: 'angola',
        key: 'angola',
        countryCodes: ['244'],
        isoCode2: 'AO',
        isoCode3: 'AGO'
    },
    {
        name: 'anguilla',
        key: 'anguilla',
        countryCodes: ['1264'],
        isoCode2: 'AI',
        isoCode3: 'AIA'
    },
    {
        name: 'antarctica',
        key: 'antarctica',
        countryCodes: ['672'],
        isoCode2: 'AQ',
        isoCode3: 'ATA'
    },
    {
        name: 'antigua and barbuda',
        key: 'antigua-and-barbuda',
        countryCodes: ['1268'],
        isoCode2: 'AG',
        isoCode3: 'ATG'
    },
    {
        name: 'argentina',
        key: 'argentina',
        countryCodes: ['54'],
        isoCode2: 'AR',
        isoCode3: 'ARG'
    },
    {
        name: 'armenia',
        key: 'armenia',
        countryCodes: ['374'],
        isoCode2: 'AM',
        isoCode3: 'ARM'
    },
    {
        name: 'aruba',
        key: 'aruba',
        countryCodes: ['297'],
        isoCode2: 'AW',
        isoCode3: 'ABW'
    },
    {
        name: 'australia',
        key: 'australia',
        countryCodes: ['61'],
        isoCode2: 'AU',
        isoCode3: 'AUS'
    },
    {
        name: 'austria',
        key: 'austria',
        countryCodes: ['43'],
        isoCode2: 'AT',
        isoCode3: 'AUT'
    },
    {
        name: 'azerbaijan',
        key: 'azerbaijan',
        countryCodes: ['994'],
        isoCode2: 'AZ',
        isoCode3: 'AZE'
    },
    {
        name: 'bahamas the',
        key: 'bahamas-the',
        countryCodes: ['1242'],
        isoCode2: 'BS',
        isoCode3: 'BHS'
    },
    {
        name: 'bahrain',
        key: 'bahrain',
        countryCodes: ['973'],
        isoCode2: 'BH',
        isoCode3: 'BHR'
    },
    {
        name: 'bangladesh',
        key: 'bangladesh',
        countryCodes: ['880'],
        isoCode2: 'BD',
        isoCode3: 'BGD'
    },
    {
        name: 'barbados',
        key: 'barbados',
        countryCodes: ['1246'],
        isoCode2: 'BB',
        isoCode3: 'BRB'
    },
    {
        name: 'belarus',
        key: 'belarus',
        countryCodes: ['375'],
        isoCode2: 'BY',
        isoCode3: 'BLR'
    },
    {
        name: 'belgium',
        key: 'belgium',
        countryCodes: ['32'],
        isoCode2: 'BE',
        isoCode3: 'BEL'
    },
    {
        name: 'belize',
        key: 'belize',
        countryCodes: ['501'],
        isoCode2: 'BZ',
        isoCode3: 'BLZ'
    },
    {
        name: 'benin',
        key: 'benin',
        countryCodes: ['229'],
        isoCode2: 'BJ',
        isoCode3: 'BEN'
    },
    {
        name: 'bermuda',
        key: 'bermuda',
        countryCodes: ['1441'],
        isoCode2: 'BM',
        isoCode3: 'BMU'
    },
    {
        name: 'bhutan',
        key: 'bhutan',
        countryCodes: ['975'],
        isoCode2: 'BT',
        isoCode3: 'BTN'
    },
    {
        name: 'bolivia',
        key: 'bolivia',
        countryCodes: ['591'],
        isoCode2: 'BO',
        isoCode3: 'BOL'
    },
    {
        name: 'bosnia and herzegovina',
        key: 'bosnia-and-herzegovina',
        countryCodes: ['387'],
        isoCode2: 'BA',
        isoCode3: 'BIH'
    },
    {
        name: 'botswana',
        key: 'botswana',
        countryCodes: ['267'],
        isoCode2: 'BW',
        isoCode3: 'BWA'
    },
    {
        name: 'bouvet island',
        key: 'bouvet-island',
        countryCodes: ['47'],
        isoCode2: 'BV',
        isoCode3: 'BVT'
    },
    {
        name: 'brazil',
        key: 'brazil',
        countryCodes: ['55'],
        isoCode2: 'BR',
        isoCode3: 'BRA'
    },
    {
        name: 'british indian ocean territory',
        key: 'british-indian-ocean-territory',
        countryCodes: ['246'],
        isoCode2: 'IO',
        isoCode3: 'IOT'
    },
    {
        name: 'brunei',
        key: 'brunei',
        countryCodes: ['673'],
        isoCode2: 'BN',
        isoCode3: 'BRN'
    },
    {
        name: 'bulgaria',
        key: 'bulgaria',
        countryCodes: ['359'],
        isoCode2: 'BG',
        isoCode3: 'BGR'
    },
    {
        name: 'burkina faso',
        key: 'burkina-faso',
        countryCodes: ['226'],
        isoCode2: 'BF',
        isoCode3: 'BFA'
    },
    {
        name: 'burundi',
        key: 'burundi',
        countryCodes: ['257'],
        isoCode2: 'BI',
        isoCode3: 'BDI'
    },
    {
        name: 'cambodia',
        key: 'cambodia',
        countryCodes: ['855'],
        isoCode2: 'KH',
        isoCode3: 'KHM'
    },
    {
        name: 'cameroon',
        key: 'cameroon',
        countryCodes: ['237'],
        isoCode2: 'CM',
        isoCode3: 'CMR'
    },
    {
        name: 'canada',
        key: 'canada',
        countryCodes: ['1'],
        isoCode2: 'CA',
        isoCode3: 'CAN'
    },
    {
        name: 'cape verde',
        key: 'cape-verde',
        countryCodes: ['238'],
        isoCode2: 'CV',
        isoCode3: 'CPV'
    },
    {
        name: 'cayman islands',
        key: 'cayman-islands',
        countryCodes: ['1345'],
        isoCode2: 'KY',
        isoCode3: 'CYM'
    },
    {
        name: 'central african republic',
        key: 'central-african-republic',
        countryCodes: ['236'],
        isoCode2: 'CF',
        isoCode3: 'CAF'
    },
    {
        name: 'chad',
        key: 'chad',
        countryCodes: ['235'],
        isoCode2: 'TD',
        isoCode3: 'TCD'
    },
    {
        name: 'chile',
        key: 'chile',
        countryCodes: ['56'],
        isoCode2: 'CL',
        isoCode3: 'CHL'
    },
    {
        name: 'china',
        key: 'china',
        countryCodes: ['86'],
        isoCode2: 'CN',
        isoCode3: 'CHN'
    },
    {
        name: 'christmas island',
        key: 'christmas-island',
        countryCodes: ['61'],
        isoCode2: 'CX',
        isoCode3: 'CXR'
    },
    {
        name: 'cocos (keeling) islands',
        key: 'cocos-keeling-islands',
        countryCodes: ['61'],
        isoCode2: 'CC',
        isoCode3: 'CCK'
    },
    {
        name: 'colombia',
        key: 'colombia',
        countryCodes: ['57'],
        isoCode2: 'CO',
        isoCode3: 'COL'
    },
    {
        name: 'comoros',
        key: 'comoros',
        countryCodes: ['269'],
        isoCode2: 'KM',
        isoCode3: 'COM'
    },
    {
        name: 'congo',
        key: 'congo',
        countryCodes: ['242'],
        isoCode2: 'CG',
        isoCode3: 'COG'
    },
    {
        name: 'congo the democratic republic of the',
        key: 'congo-the-democratic-republic-of-the',
        countryCodes: ['243'],
        isoCode2: 'CD',
        isoCode3: 'COD'
    },
    {
        name: 'cook islands',
        key: 'cook-islands',
        countryCodes: ['682'],
        isoCode2: 'CK',
        isoCode3: 'COK'
    },
    {
        name: 'costa rica',
        key: 'costa-rica',
        countryCodes: ['506'],
        isoCode2: 'CR',
        isoCode3: 'CRI'
    },
    {
        name: "cote d'ivoire (ivory coast)",
        key: 'cote-d-ivoire-ivory-coast',
        countryCodes: ['225'],
        isoCode2: 'CI',
        isoCode3: 'CIV'
    },
    {
        name: 'croatia (hrvatska)',
        key: 'croatia-hrvatska',
        countryCodes: ['385'],
        isoCode2: 'HR',
        isoCode3: 'HRV'
    },
    {
        name: 'cuba',
        key: 'cuba',
        countryCodes: ['53'],
        isoCode2: 'CU',
        isoCode3: 'CUB'
    },
    {
        name: 'cyprus',
        key: 'cyprus',
        countryCodes: ['357'],
        isoCode2: 'CY',
        isoCode3: 'CYP'
    },
    {
        name: 'czech republic',
        key: 'czech-republic',
        countryCodes: ['420'],
        isoCode2: 'CZ',
        isoCode3: 'CZE'
    },
    {
        name: 'denmark',
        key: 'denmark',
        countryCodes: ['45'],
        isoCode2: 'DK',
        isoCode3: 'DNK'
    },
    {
        name: 'djibouti',
        key: 'djibouti',
        countryCodes: ['253'],
        isoCode2: 'DJ',
        isoCode3: 'DJI'
    },
    {
        name: 'dominica',
        key: 'dominica',
        countryCodes: ['1767'],
        isoCode2: 'DM',
        isoCode3: 'DMA'
    },
    {
        name: 'dominican republic',
        key: 'dominican-republic',
        countryCodes: ['1809', '1829', '1849'],
        isoCode2: 'DO',
        isoCode3: 'DOM'
    },
    {
        name: 'east timor',
        key: 'east-timor',
        countryCodes: ['670'],
        isoCode2: 'TL',
        isoCode3: 'TLS'
    },
    {
        name: 'ecuador',
        key: 'ecuador',
        countryCodes: ['593'],
        isoCode2: 'EC',
        isoCode3: 'ECU'
    },
    {
        name: 'egypt',
        key: 'egypt',
        countryCodes: ['20'],
        isoCode2: 'EG',
        isoCode3: 'EGY'
    },
    {
        name: 'el salvador',
        key: 'el-salvador',
        countryCodes: ['503'],
        isoCode2: 'SV',
        isoCode3: 'SLV'
    },
    {
        name: 'equatorial guinea',
        key: 'equatorial-guinea',
        countryCodes: ['240'],
        isoCode2: 'GQ',
        isoCode3: 'GNQ'
    },
    {
        name: 'eritrea',
        key: 'eritrea',
        countryCodes: ['291'],
        isoCode2: 'ER',
        isoCode3: 'ERI'
    },
    {
        name: 'estonia',
        key: 'estonia',
        countryCodes: ['372'],
        isoCode2: 'EE',
        isoCode3: 'EST'
    },
    {
        name: 'ethiopia',
        key: 'ethiopia',
        countryCodes: ['251'],
        isoCode2: 'ET',
        isoCode3: 'ETH'
    },
    {
        name: 'external territories of australia',
        key: 'external-territories-of-australia',
        countryCodes: ['61'],
        isoCode2: 'AU',
        isoCode3: 'AUS'
    },
    {
        name: 'falkland islands',
        key: 'falkland-islands',
        countryCodes: ['500'],
        isoCode2: 'FK',
        isoCode3: 'FLK'
    },
    {
        name: 'faroe islands',
        key: 'faroe-islands',
        countryCodes: ['298'],
        isoCode2: 'FO',
        isoCode3: 'FRO'
    },
    {
        name: 'fiji islands',
        key: 'fiji-islands',
        countryCodes: ['679'],
        isoCode2: 'FJ',
        isoCode3: 'FJI'
    },
    {
        name: 'finland',
        key: 'finland',
        countryCodes: ['358'],
        isoCode2: 'FI',
        isoCode3: 'FIN'
    },
    {
        name: 'france',
        key: 'france',
        countryCodes: ['33'],
        isoCode2: 'FR',
        isoCode3: 'FRA'
    },
    {
        name: 'french guiana',
        key: 'french-guiana',
        countryCodes: ['594'],
        isoCode2: 'GF',
        isoCode3: 'GUF'
    },
    {
        name: 'french polynesia',
        key: 'french-polynesia',
        countryCodes: ['689'],
        isoCode2: 'PF',
        isoCode3: 'PYF'
    },
    {
        name: 'french southern territories',
        key: 'french-southern-territories',
        countryCodes: ['262'],
        isoCode2: 'TF',
        isoCode3: 'ATF'
    },
    {
        name: 'gabon',
        key: 'gabon',
        countryCodes: ['241'],
        isoCode2: 'GA',
        isoCode3: 'GAB'
    },
    {
        name: 'gambia the',
        key: 'gambia-the',
        countryCodes: ['220'],
        isoCode2: 'GM',
        isoCode3: 'GMB'
    },
    {
        name: 'georgia',
        key: 'georgia',
        countryCodes: ['995'],
        isoCode2: 'GE',
        isoCode3: 'GEO'
    },
    {
        name: 'germany',
        key: 'germany',
        countryCodes: ['49'],
        isoCode2: 'DE',
        isoCode3: 'DEU'
    },
    {
        name: 'ghana',
        key: 'ghana',
        countryCodes: ['233'],
        isoCode2: 'GH',
        isoCode3: 'GHA'
    },
    {
        name: 'gibraltar',
        key: 'gibraltar',
        countryCodes: ['350'],
        isoCode2: 'GI',
        isoCode3: 'GIB'
    },
    {
        name: 'greece',
        key: 'greece',
        countryCodes: ['30'],
        isoCode2: 'GR',
        isoCode3: 'GRC'
    },
    {
        name: 'greenland',
        key: 'greenland',
        countryCodes: ['299'],
        isoCode2: 'GL',
        isoCode3: 'GRL'
    },
    {
        name: 'grenada',
        key: 'grenada',
        countryCodes: ['1473'],
        isoCode2: 'GD',
        isoCode3: 'GRD'
    },
    {
        name: 'guadeloupe',
        key: 'guadeloupe',
        countryCodes: ['590'],
        isoCode2: 'GP',
        isoCode3: 'GLP'
    },
    {
        name: 'guam',
        key: 'guam',
        countryCodes: ['1671'],
        isoCode2: 'GU',
        isoCode3: 'GUM'
    },
    {
        name: 'guatemala',
        key: 'guatemala',
        countryCodes: ['502'],
        isoCode2: 'GT',
        isoCode3: 'GTM'
    },
    {
        name: 'guernsey and alderney',
        key: 'guernsey-and-alderney',
        countryCodes: ['44'],
        isoCode2: 'GG',
        isoCode3: 'GGY'
    },
    {
        name: 'guinea',
        key: 'guinea',
        countryCodes: ['224'],
        isoCode2: 'GN',
        isoCode3: 'GIN'
    },
    {
        name: 'guinea-bissau',
        key: 'guinea-bissau',
        countryCodes: ['245'],
        isoCode2: 'GW',
        isoCode3: 'GNB'
    },
    {
        name: 'guyana',
        key: 'guyana',
        countryCodes: ['592'],
        isoCode2: 'GY',
        isoCode3: 'GUY'
    },
    {
        name: 'haiti',
        key: 'haiti',
        countryCodes: ['509'],
        isoCode2: 'HT',
        isoCode3: 'HTI'
    },
    {
        name: 'heard and mcdonald islands',
        key: 'heard-and-mcdonald-islands',
        countryCodes: ['672'],
        isoCode2: 'HM',
        isoCode3: 'HMD'
    },
    {
        name: 'honduras',
        key: 'honduras',
        countryCodes: ['504'],
        isoCode2: 'HN',
        isoCode3: 'HND'
    },
    {
        name: 'hong kong s.a.r.',
        key: 'hong-kong-s-a-r',
        countryCodes: ['852'],
        isoCode2: 'HK',
        isoCode3: 'HKG'
    },
    {
        name: 'hungary',
        key: 'hungary',
        countryCodes: ['36'],
        isoCode2: 'HU',
        isoCode3: 'HUN'
    },
    {
        name: 'iceland',
        key: 'iceland',
        countryCodes: ['354'],
        isoCode2: 'IS',
        isoCode3: 'ISL'
    },
    {
        name: 'india',
        key: 'india',
        countryCodes: ['91'],
        isoCode2: 'IN',
        isoCode3: 'IND'
    },
    {
        name: 'indonesia',
        key: 'indonesia',
        countryCodes: ['62'],
        isoCode2: 'ID',
        isoCode3: 'IDN'
    },
    {
        name: 'iran',
        key: 'iran',
        countryCodes: ['98'],
        isoCode2: 'IR',
        isoCode3: 'IRN'
    },
    {
        name: 'iraq',
        key: 'iraq',
        countryCodes: ['964'],
        isoCode2: 'IQ',
        isoCode3: 'IRQ'
    },
    {
        name: 'ireland',
        key: 'ireland',
        countryCodes: ['353'],
        isoCode2: 'IE',
        isoCode3: 'IRL'
    },
    {
        name: 'israel',
        key: 'israel',
        countryCodes: ['972'],
        isoCode2: 'IL',
        isoCode3: 'ISR'
    },
    {
        name: 'italy',
        key: 'italy',
        countryCodes: ['39'],
        isoCode2: 'IT',
        isoCode3: 'ITA'
    },
    {
        name: 'jamaica',
        key: 'jamaica',
        countryCodes: ['1876', '1658'],
        isoCode2: 'JM',
        isoCode3: 'JAM'
    },
    {
        name: 'japan',
        key: 'japan',
        countryCodes: ['81'],
        isoCode2: 'JP',
        isoCode3: 'JPN'
    },
    {
        name: 'jersey',
        key: 'jersey',
        countryCodes: ['44'],
        isoCode2: 'JE',
        isoCode3: 'JEY'
    },
    {
        name: 'jordan',
        key: 'jordan',
        countryCodes: ['962'],
        isoCode2: 'JO',
        isoCode3: 'JOR'
    },
    {
        name: 'kazakhstan',
        key: 'kazakhstan',
        countryCodes: ['76', '77'],
        isoCode2: 'KZ',
        isoCode3: 'KAZ'
    },
    {
        name: 'kenya',
        key: 'kenya',
        countryCodes: ['254'],
        isoCode2: 'KE',
        isoCode3: 'KEN'
    },
    {
        name: 'kiribati',
        key: 'kiribati',
        countryCodes: ['686'],
        isoCode2: 'KI',
        isoCode3: 'KIR'
    },
    {
        name: 'korea north',
        key: 'korea-north',
        countryCodes: ['850'],
        isoCode2: 'KP',
        isoCode3: 'PRK'
    },
    {
        name: 'korea south',
        key: 'korea-south',
        countryCodes: ['82'],
        isoCode2: 'KR',
        isoCode3: 'KOR'
    },
    {
        name: 'kuwait',
        key: 'kuwait',
        countryCodes: ['965'],
        isoCode2: 'KW',
        isoCode3: 'KWT'
    },
    {
        name: 'kyrgyzstan',
        key: 'kyrgyzstan',
        countryCodes: ['996'],
        isoCode2: 'KG',
        isoCode3: 'KGZ'
    },
    {
        name: 'laos',
        key: 'laos',
        countryCodes: ['856'],
        isoCode2: 'LA',
        isoCode3: 'LAO'
    },
    {
        name: 'latvia',
        key: 'latvia',
        countryCodes: ['371'],
        isoCode2: 'LV',
        isoCode3: 'LVA'
    },
    {
        name: 'lebanon',
        key: 'lebanon',
        countryCodes: ['961'],
        isoCode2: 'LB',
        isoCode3: 'LBN'
    },
    {
        name: 'lesotho',
        key: 'lesotho',
        countryCodes: ['266'],
        isoCode2: 'LS',
        isoCode3: 'LSO'
    },
    {
        name: 'liberia',
        key: 'liberia',
        countryCodes: ['231'],
        isoCode2: 'LR',
        isoCode3: 'LBR'
    },
    {
        name: 'libya',
        key: 'libya',
        countryCodes: ['218'],
        isoCode2: 'LY',
        isoCode3: 'LBY'
    },
    {
        name: 'liechtenstein',
        key: 'liechtenstein',
        countryCodes: ['423'],
        isoCode2: 'LI',
        isoCode3: 'LIE'
    },
    {
        name: 'lithuania',
        key: 'lithuania',
        countryCodes: ['370'],
        isoCode2: 'LT',
        isoCode3: 'LTU'
    },
    {
        name: 'luxembourg',
        key: 'luxembourg',
        countryCodes: ['352'],
        isoCode2: 'LU',
        isoCode3: 'LUX'
    },
    {
        name: 'macau s.a.r.',
        key: 'macau-s-a-r',
        countryCodes: ['853'],
        isoCode2: 'MO',
        isoCode3: 'MAC'
    },
    {
        name: 'macedonia',
        key: 'macedonia',
        countryCodes: ['389'],
        isoCode2: 'MK',
        isoCode3: 'MKD'
    },
    {
        name: 'madagascar',
        key: 'madagascar',
        countryCodes: ['261'],
        isoCode2: 'MG',
        isoCode3: 'MDG'
    },
    {
        name: 'malawi',
        key: 'malawi',
        countryCodes: ['265'],
        isoCode2: 'MW',
        isoCode3: 'MWI'
    },
    {
        name: 'malaysia',
        key: 'malaysia',
        countryCodes: ['60'],
        isoCode2: 'MY',
        isoCode3: 'MYS'
    },
    {
        name: 'maldives',
        key: 'maldives',
        countryCodes: ['960'],
        isoCode2: 'MV',
        isoCode3: 'MDV'
    },
    {
        name: 'mali',
        key: 'mali',
        countryCodes: ['223'],
        isoCode2: 'ML',
        isoCode3: 'MLI'
    },
    {
        name: 'malta',
        key: 'malta',
        countryCodes: ['356'],
        isoCode2: 'MT',
        isoCode3: 'MLT'
    },
    {
        name: 'man (isle of)',
        key: 'man-isle-of',
        countryCodes: ['44'],
        isoCode2: 'IM',
        isoCode3: 'IMN'
    },
    {
        name: 'marshall islands',
        key: 'marshall-islands',
        countryCodes: ['692'],
        isoCode2: 'MH',
        isoCode3: 'MHL'
    },
    {
        name: 'martinique',
        key: 'martinique',
        countryCodes: ['596'],
        isoCode2: 'MQ',
        isoCode3: 'MTQ'
    },
    {
        name: 'mauritania',
        key: 'mauritania',
        countryCodes: ['222'],
        isoCode2: 'MR',
        isoCode3: 'MRT'
    },
    {
        name: 'mauritius',
        key: 'mauritius',
        countryCodes: ['230'],
        isoCode2: 'MU',
        isoCode3: 'MUS'
    },
    {
        name: 'mayotte',
        key: 'mayotte',
        countryCodes: ['262'],
        isoCode2: 'YT',
        isoCode3: 'MYT'
    },
    {
        name: 'mexico',
        key: 'mexico',
        countryCodes: ['52'],
        isoCode2: 'MX',
        isoCode3: 'MEX'
    },
    {
        name: 'micronesia',
        key: 'micronesia',
        countryCodes: ['691'],
        isoCode2: 'FM',
        isoCode3: 'FSM'
    },
    {
        name: 'moldova',
        key: 'moldova',
        countryCodes: ['373'],
        isoCode2: 'MD',
        isoCode3: 'MDA'
    },
    {
        name: 'monaco',
        key: 'monaco',
        countryCodes: ['377'],
        isoCode2: 'MC',
        isoCode3: 'MCO'
    },
    {
        name: 'mongolia',
        key: 'mongolia',
        countryCodes: ['976'],
        isoCode2: 'MN',
        isoCode3: 'MNG'
    },
    {
        name: 'montserrat',
        key: 'montserrat',
        countryCodes: ['1664'],
        isoCode2: 'MS',
        isoCode3: 'MSR'
    },
    {
        name: 'morocco',
        key: 'morocco',
        countryCodes: ['212'],
        isoCode2: 'MA',
        isoCode3: 'MAR'
    },
    {
        name: 'mozambique',
        key: 'mozambique',
        countryCodes: ['258'],
        isoCode2: 'MZ',
        isoCode3: 'MOZ'
    },
    {
        name: 'myanmar',
        key: 'myanmar',
        countryCodes: ['95'],
        isoCode2: 'MM',
        isoCode3: 'MMR'
    },
    {
        name: 'namibia',
        key: 'namibia',
        countryCodes: ['264'],
        isoCode2: 'NA',
        isoCode3: 'NAM'
    },
    {
        name: 'nauru',
        key: 'nauru',
        countryCodes: ['674'],
        isoCode2: 'NR',
        isoCode3: 'NRU'
    },
    {
        name: 'nepal',
        key: 'nepal',
        countryCodes: ['977'],
        isoCode2: 'NP',
        isoCode3: 'NPL'
    },
    {
        name: 'netherlands antilles',
        key: 'netherlands-antilles',
        countryCodes: ['599'],
        isoCode2: 'AN',
        isoCode3: 'ANT'
    },
    {
        name: 'netherlands the',
        key: 'netherlands-the',
        countryCodes: ['31'],
        isoCode2: 'NL',
        isoCode3: 'NLD'
    },
    {
        name: 'new caledonia',
        key: 'new-caledonia',
        countryCodes: ['687'],
        isoCode2: 'NC',
        isoCode3: 'NCL'
    },
    {
        name: 'new zealand',
        key: 'new-zealand',
        countryCodes: ['64'],
        isoCode2: 'NZ',
        isoCode3: 'NZL'
    },
    {
        name: 'nicaragua',
        key: 'nicaragua',
        countryCodes: ['505'],
        isoCode2: 'NI',
        isoCode3: 'NIC'
    },
    {
        name: 'niger',
        key: 'niger',
        countryCodes: ['227'],
        isoCode2: 'NE',
        isoCode3: 'NER'
    },
    {
        name: 'nigeria',
        key: 'nigeria',
        countryCodes: ['234'],
        isoCode2: 'NG',
        isoCode3: 'NGA'
    },
    {
        name: 'niue',
        key: 'niue',
        countryCodes: ['683'],
        isoCode2: 'NU',
        isoCode3: 'NIU'
    },
    {
        name: 'norfolk island',
        key: 'norfolk-island',
        countryCodes: ['672'],
        isoCode2: 'NF',
        isoCode3: 'NFK'
    },
    {
        name: 'northern mariana islands',
        key: 'northern-mariana-islands',
        countryCodes: ['1670'],
        isoCode2: 'MP',
        isoCode3: 'MNP'
    },
    {
        name: 'norway',
        key: 'norway',
        countryCodes: ['47'],
        isoCode2: 'NO',
        isoCode3: 'NOR'
    },
    {
        name: 'oman',
        key: 'oman',
        countryCodes: ['968'],
        isoCode2: 'OM',
        isoCode3: 'OMN'
    },
    {
        name: 'pakistan',
        key: 'pakistan',
        countryCodes: ['92'],
        isoCode2: 'PK',
        isoCode3: 'PAK'
    },
    {
        name: 'palau',
        key: 'palau',
        countryCodes: ['680'],
        isoCode2: 'PW',
        isoCode3: 'PLW'
    },
    {
        name: 'palestinian territory occupied',
        key: 'palestinian-territory-occupied',
        countryCodes: ['970'],
        isoCode2: 'PS',
        isoCode3: 'PSE'
    },
    {
        name: 'panama',
        key: 'panama',
        countryCodes: ['507'],
        isoCode2: 'PA',
        isoCode3: 'PAN'
    },
    {
        name: 'papua new guinea',
        key: 'papua-new-guinea',
        countryCodes: ['675'],
        isoCode2: 'PG',
        isoCode3: 'PNG'
    },
    {
        name: 'paraguay',
        key: 'paraguay',
        countryCodes: ['595'],
        isoCode2: 'PY',
        isoCode3: 'PRY'
    },
    {
        name: 'peru',
        key: 'peru',
        countryCodes: ['51'],
        isoCode2: 'PE',
        isoCode3: 'PER'
    },
    {
        name: 'philippines',
        key: 'philippines',
        countryCodes: ['63'],
        isoCode2: 'PH',
        isoCode3: 'PHL'
    },
    {
        name: 'pitcairn island',
        key: 'pitcairn-island',
        countryCodes: ['64'],
        isoCode2: 'PN',
        isoCode3: 'PCN'
    },
    {
        name: 'poland',
        key: 'poland',
        countryCodes: ['48'],
        isoCode2: 'PL',
        isoCode3: 'POL'
    },
    {
        name: 'portugal',
        key: 'portugal',
        countryCodes: ['351'],
        isoCode2: 'PT',
        isoCode3: 'PRT'
    },
    {
        name: 'puerto rico',
        key: 'puerto-rico',
        countryCodes: ['1787', '1939'],
        isoCode2: 'PR',
        isoCode3: 'PRI'
    },
    {
        name: 'qatar',
        key: 'qatar',
        countryCodes: ['974'],
        isoCode2: 'QA',
        isoCode3: 'QAT'
    },
    {
        name: 'reunion',
        key: 'reunion',
        countryCodes: ['262'],
        isoCode2: 'RE',
        isoCode3: 'REU'
    },
    {
        name: 'romania',
        key: 'romania',
        countryCodes: ['40'],
        isoCode2: 'RO',
        isoCode3: 'ROU'
    },
    {
        name: 'russia',
        key: 'russia',
        countryCodes: ['73', '74', '75', '78', '79'],
        isoCode2: 'RU',
        isoCode3: 'RUS'
    },
    {
        name: 'rwanda',
        key: 'rwanda',
        countryCodes: ['250'],
        isoCode2: 'RW',
        isoCode3: 'RWA'
    },
    {
        name: 'saint helena',
        key: 'saint-helena',
        countryCodes: ['290', '247'],
        isoCode2: 'SH',
        isoCode3: 'SHN'
    },
    {
        name: 'saint kitts and nevis',
        key: 'saint-kitts-and-nevis',
        countryCodes: ['1869'],
        isoCode2: 'KN',
        isoCode3: 'KNA'
    },
    {
        name: 'saint lucia',
        key: 'saint-lucia',
        countryCodes: ['1758'],
        isoCode2: 'LC',
        isoCode3: 'LCA'
    },
    {
        name: 'saint pierre and miquelon',
        key: 'saint-pierre-and-miquelon',
        countryCodes: ['508'],
        isoCode2: 'PM',
        isoCode3: 'SPM'
    },
    {
        name: 'saint vincent and the grenadines',
        key: 'saint-vincent-and-the-grenadines',
        countryCodes: ['1-784'],
        isoCode2: 'VC',
        isoCode3: 'VCT'
    },
    {
        name: 'samoa',
        key: 'samoa',
        countryCodes: ['685'],
        isoCode2: 'WS',
        isoCode3: 'WSM'
    },
    {
        name: 'san marino',
        key: 'san-marino',
        countryCodes: ['378'],
        isoCode2: 'SM',
        isoCode3: 'SMR'
    },
    {
        name: 'sao tome and principe',
        key: 'sao-tome-and-principe',
        countryCodes: ['239'],
        isoCode2: 'ST',
        isoCode3: 'STP'
    },
    {
        name: 'saudi arabia',
        key: 'saudi-arabia',
        countryCodes: ['966'],
        isoCode2: 'SA',
        isoCode3: 'SAU'
    },
    {
        name: 'senegal',
        key: 'senegal',
        countryCodes: ['221'],
        isoCode2: 'SN',
        isoCode3: 'SEN'
    },
    {
        name: 'serbia',
        key: 'serbia',
        countryCodes: ['381'],
        isoCode2: 'RS',
        isoCode3: 'SRB'
    },
    {
        name: 'seychelles',
        key: 'seychelles',
        countryCodes: ['248'],
        isoCode2: 'SC',
        isoCode3: 'SYC'
    },
    {
        name: 'sierra leone',
        key: 'sierra-leone',
        countryCodes: ['232'],
        isoCode2: 'SL',
        isoCode3: 'SLE'
    },
    {
        name: 'singapore',
        key: 'singapore',
        countryCodes: ['65'],
        isoCode2: 'SG',
        isoCode3: 'SGP'
    },
    {
        name: 'slovakia',
        key: 'slovakia',
        countryCodes: ['421'],
        isoCode2: 'SK',
        isoCode3: 'SVK'
    },
    {
        name: 'slovenia',
        key: 'slovenia',
        countryCodes: ['386'],
        isoCode2: 'SI',
        isoCode3: 'SVN'
    },
    {
        name: 'smaller territories of the uk',
        key: 'smaller-territories-of-the-uk',
        countryCodes: ['44'],
        isoCode2: 'GB',
        isoCode3: 'GBR'
    },
    {
        name: 'solomon islands',
        key: 'solomon-islands',
        countryCodes: ['677'],
        isoCode2: 'SB',
        isoCode3: 'SLB'
    },
    {
        name: 'somalia',
        key: 'somalia',
        countryCodes: ['252'],
        isoCode2: 'SO',
        isoCode3: 'SOM'
    },
    {
        name: 'south africa',
        key: 'south-africa',
        countryCodes: ['27'],
        isoCode2: 'ZA',
        isoCode3: 'ZAF'
    },
    {
        name: 'south georgia',
        key: 'south-georgia',
        countryCodes: ['500'],
        isoCode2: 'GS',
        isoCode3: 'SGS'
    },
    {
        name: 'south sudan',
        key: 'south-sudan',
        countryCodes: ['211'],
        isoCode2: 'SS',
        isoCode3: 'SSD'
    },
    {
        name: 'spain',
        key: 'spain',
        countryCodes: ['34'],
        isoCode2: 'ES',
        isoCode3: 'ESP'
    },
    {
        name: 'sri lanka',
        key: 'sri-lanka',
        countryCodes: ['94'],
        isoCode2: 'LK',
        isoCode3: 'LKA'
    },
    {
        name: 'sudan',
        key: 'sudan',
        countryCodes: ['249'],
        isoCode2: 'SD',
        isoCode3: 'SDN'
    },
    {
        name: 'suriname',
        key: 'suriname',
        countryCodes: ['597'],
        isoCode2: 'SR',
        isoCode3: 'SUR'
    },
    {
        name: 'svalbard and jan mayen islands',
        key: 'svalbard-and-jan-mayen-islands',
        countryCodes: ['4779'],
        isoCode2: 'SJ',
        isoCode3: 'SJM'
    },
    {
        name: 'swaziland',
        key: 'swaziland',
        countryCodes: ['268'],
        isoCode2: 'SZ',
        isoCode3: 'SWZ'
    },
    {
        name: 'sweden',
        key: 'sweden',
        countryCodes: ['46'],
        isoCode2: 'SE',
        isoCode3: 'SWE'
    },
    {
        name: 'switzerland',
        key: 'switzerland',
        countryCodes: ['41'],
        isoCode2: 'CH',
        isoCode3: 'CHE'
    },
    {
        name: 'syria',
        key: 'syria',
        countryCodes: ['963'],
        isoCode2: 'SY',
        isoCode3: 'SYR'
    },
    {
        name: 'taiwan',
        key: 'taiwan',
        countryCodes: ['886'],
        isoCode2: 'TW',
        isoCode3: 'TWN'
    },
    {
        name: 'tajikistan',
        key: 'tajikistan',
        countryCodes: ['992'],
        isoCode2: 'TJ',
        isoCode3: 'TJK'
    },
    {
        name: 'tanzania',
        key: 'tanzania',
        countryCodes: ['255'],
        isoCode2: 'TZ',
        isoCode3: 'TZA'
    },
    {
        name: 'thailand',
        key: 'thailand',
        countryCodes: ['66'],
        isoCode2: 'TH',
        isoCode3: 'THA'
    },
    {
        name: 'togo',
        key: 'togo',
        countryCodes: ['228'],
        isoCode2: 'TG',
        isoCode3: 'TGO'
    },
    {
        name: 'tokelau',
        key: 'tokelau',
        countryCodes: ['690'],
        isoCode2: 'TK',
        isoCode3: 'TKL'
    },
    {
        name: 'tonga',
        key: 'tonga',
        countryCodes: ['676'],
        isoCode2: 'TO',
        isoCode3: 'TON'
    },
    {
        name: 'trinidad and tobago',
        key: 'trinidad-and-tobago',
        countryCodes: ['1868'],
        isoCode2: 'TT',
        isoCode3: 'TTO'
    },
    {
        name: 'tunisia',
        key: 'tunisia',
        countryCodes: ['216'],
        isoCode2: 'TN',
        isoCode3: 'TUN'
    },
    {
        name: 'turkey',
        key: 'turkey',
        countryCodes: ['90'],
        isoCode2: 'TR',
        isoCode3: 'TUR'
    },
    {
        name: 'turkmenistan',
        key: 'turkmenistan',
        countryCodes: ['993'],
        isoCode2: 'TM',
        isoCode3: 'TKM'
    },
    {
        name: 'turks and caicos islands',
        key: 'turks-and-caicos-islands',
        countryCodes: ['1649'],
        isoCode2: 'TC',
        isoCode3: 'TCA'
    },
    {
        name: 'tuvalu',
        key: 'tuvalu',
        countryCodes: ['688'],
        isoCode2: 'TV',
        isoCode3: 'TUV'
    },
    {
        name: 'uganda',
        key: 'uganda',
        countryCodes: ['256'],
        isoCode2: 'UG',
        isoCode3: 'UGA'
    },
    {
        name: 'ukraine',
        key: 'ukraine',
        countryCodes: ['380'],
        isoCode2: 'UA',
        isoCode3: 'UKR'
    },
    {
        name: 'united arab emirates',
        key: 'united-arab-emirates',
        countryCodes: ['971'],
        isoCode2: 'AE',
        isoCode3: 'ARE'
    },
    {
        name: 'united kingdom',
        key: 'united-kingdom',
        countryCodes: ['44'],
        isoCode2: 'GB',
        isoCode3: 'GBR'
    },
    {
        name: 'united states',
        key: 'united-states',
        countryCodes: [
            '1201',
            '1202',
            '1203',
            '1205',
            '1206',
            '1207',
            '1208',
            '1209',
            '1210',
            '1212',
            '1213',
            '1214',
            '1215',
            '1216',
            '1217',
            '1218',
            '1219',
            '1220',
            '1224',
            '1225',
            '1227',
            '1228',
            '1229',
            '1231',
            '1234',
            '1239',
            '1240',
            '1248',
            '1251',
            '1252',
            '1253',
            '1254',
            '1256',
            '1260',
            '1262',
            '1267',
            '1269',
            '1270',
            '1272',
            '1274',
            '1276',
            '1281',
            '1283',
            '1301',
            '1302',
            '1303',
            '1304',
            '1305',
            '1307',
            '1308',
            '1309',
            '1310',
            '1312',
            '1313',
            '1314',
            '1315',
            '1316',
            '1317',
            '1318',
            '1319',
            '1320',
            '1321',
            '1323',
            '1325',
            '1327',
            '1330',
            '1331',
            '1334',
            '1336',
            '1337',
            '1339',
            '1346',
            '1347',
            '1351',
            '1352',
            '1360',
            '1361',
            '1364',
            '1380',
            '1385',
            '1386',
            '1401',
            '1402',
            '1404',
            '1405',
            '1406',
            '1407',
            '1408',
            '1409',
            '1410',
            '1412',
            '1413',
            '1414',
            '1415',
            '1417',
            '1419',
            '1423',
            '1424',
            '1425',
            '1430',
            '1432',
            '1434',
            '1435',
            '1440',
            '1442',
            '1443',
            '1447',
            '1458',
            '1463',
            '1464',
            '1469',
            '1470',
            '1475',
            '1478',
            '1479',
            '1480',
            '1484',
            '1501',
            '1502',
            '1503',
            '1504',
            '1505',
            '1507',
            '1508',
            '1509',
            '1510',
            '1512',
            '1513',
            '1515',
            '1516',
            '1517',
            '1518',
            '1520',
            '1530',
            '1531',
            '1534',
            '1539',
            '1540',
            '1541',
            '1551',
            '1559',
            '1561',
            '1562',
            '1563',
            '1564',
            '1567',
            '1570',
            '1571',
            '1573',
            '1574',
            '1575',
            '1580',
            '1585',
            '1586',
            '1601',
            '1602',
            '1603',
            '1605',
            '1606',
            '1607',
            '1608',
            '1609',
            '1610',
            '1612',
            '1614',
            '1615',
            '1616',
            '1617',
            '1618',
            '1619',
            '1620',
            '1623',
            '1626',
            '1628',
            '1629',
            '1630',
            '1631',
            '1636',
            '1641',
            '1646',
            '1650',
            '1651',
            '1657',
            '1660',
            '1661',
            '1662',
            '1667',
            '1669',
            '1678',
            '1681',
            '1682',
            '1701',
            '1702',
            '1703',
            '1704',
            '1706',
            '1707',
            '1708',
            '1712',
            '1713',
            '1714',
            '1715',
            '1716',
            '1717',
            '1718',
            '1719',
            '1720',
            '1724',
            '1725',
            '1727',
            '1730',
            '1731',
            '1732',
            '1734',
            '1737',
            '1740',
            '1743',
            '1747',
            '1754',
            '1757',
            '1760',
            '1762',
            '1763',
            '1765',
            '1769',
            '1770',
            '1772',
            '1773',
            '1774',
            '1775',
            '1779',
            '1781',
            '1785',
            '1786',
            '1801',
            '1802',
            '1803',
            '1804',
            '1805',
            '1806',
            '1808',
            '1810',
            '1812',
            '1813',
            '1814',
            '1815',
            '1816',
            '1817',
            '1818',
            '1828',
            '1830',
            '1831',
            '1832',
            '1843',
            '1845',
            '1847',
            '1848',
            '1850',
            '1854',
            '1856',
            '1857',
            '1858',
            '1859',
            '1860',
            '1862',
            '1863',
            '1864',
            '1865',
            '1870',
            '1872',
            '1878',
            '1901',
            '1903',
            '1904',
            '1906',
            '1907',
            '1908',
            '1909',
            '1910',
            '1912',
            '1913',
            '1914',
            '1915',
            '1916',
            '1917',
            '1918',
            '1919',
            '1920',
            '1925',
            '1928',
            '1929',
            '1930',
            '1931',
            '1934',
            '1936',
            '1937',
            '1938',
            '1940',
            '1941',
            '1947',
            '1949',
            '1951',
            '1952',
            '1954',
            '1956',
            '1959',
            '1970',
            '1971',
            '1972',
            '1973',
            '1975',
            '1978',
            '1979',
            '1980',
            '1984',
            '1985',
            '1989'
        ],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        name: 'united states minor outlying islands',
        key: 'united-states-minor-outlying-islands',
        countryCodes: ['268'],
        isoCode2: 'UM',
        isoCode3: 'UMI'
    },
    {
        name: 'uruguay',
        key: 'uruguay',
        countryCodes: ['598'],
        isoCode2: 'UY',
        isoCode3: 'URY'
    },
    {
        name: 'uzbekistan',
        key: 'uzbekistan',
        countryCodes: ['998'],
        isoCode2: 'UZ',
        isoCode3: 'UZB'
    },
    {
        name: 'vanuatu',
        key: 'vanuatu',
        countryCodes: ['678'],
        isoCode2: 'VU',
        isoCode3: 'VUT'
    },
    {
        name: 'vatican city state (holy see)',
        key: 'vatican-city-state-holy-see',
        countryCodes: ['3906698', '379'],
        isoCode2: 'VA',
        isoCode3: 'VAT'
    },
    {
        name: 'venezuela',
        key: 'venezuela',
        countryCodes: ['58'],
        isoCode2: 'VE',
        isoCode3: 'VEN'
    },
    {
        name: 'vietnam',
        key: 'vietnam',
        countryCodes: ['84'],
        isoCode2: 'VN',
        isoCode3: 'VNM'
    },
    {
        name: 'virgin islands (british)',
        key: 'virgin-islands-british',
        countryCodes: ['1284'],
        isoCode2: 'VG',
        isoCode3: 'VGB'
    },
    {
        name: 'virgin islands (us)',
        key: 'virgin-islands-us',
        countryCodes: ['1340'],
        isoCode2: 'VI',
        isoCode3: 'VIR'
    },
    {
        name: 'wallis and futuna islands',
        key: 'wallis-and-futuna-islands',
        countryCodes: ['681'],
        isoCode2: 'WF',
        isoCode3: 'WLF'
    },
    {
        name: 'western sahara',
        key: 'western-sahara',
        countryCodes: ['2125288', '2125289'],
        isoCode2: 'EH',
        isoCode3: 'ESH'
    },
    {
        name: 'yemen',
        key: 'yemen',
        countryCodes: ['967'],
        isoCode2: 'YE',
        isoCode3: 'YEM'
    },
    {
        name: 'yugoslavia',
        key: 'yugoslavia',
        countryCodes: ['38'],
        isoCode2: 'YU',
        isoCode3: 'YUG'
    },
    {
        name: 'zambia',
        key: 'zambia',
        countryCodes: ['260'],
        isoCode2: 'ZM',
        isoCode3: 'ZMB'
    },
    {
        name: 'zimbabwe',
        key: 'zimbabwe',
        countryCodes: ['263'],
        isoCode2: 'ZW',
        isoCode3: 'ZWE'
    }
];
const dialCodes = [
    {
        label: 'afghanistan (+93)',
        value: '+93',
        country: 'afghanistan',
        country_code: 'AF',
        dial_code: '+93',
        countryCodes: ['93'],
        isoCode2: 'AF',
        isoCode3: 'AFG'
    },
    {
        label: 'albania (+355)',
        value: '+355',
        country: 'albania',
        country_code: 'AL',
        dial_code: '+355',
        countryCodes: ['355'],
        isoCode2: 'AL',
        isoCode3: 'ALB'
    },
    {
        label: 'algeria (+213)',
        value: '+213',
        country: 'algeria',
        country_code: 'DZ',
        dial_code: '+213',
        countryCodes: ['213'],
        isoCode2: 'DZ',
        isoCode3: 'DZA'
    },
    {
        label: 'american samoa (+1684)',
        value: '+1684',
        country: 'american samoa',
        country_code: 'AS',
        dial_code: '+1684',
        countryCodes: ['1684'],
        isoCode2: 'AS',
        isoCode3: 'ASM'
    },
    {
        label: 'andorra (+376)',
        value: '+376',
        country: 'andorra',
        country_code: 'AD',
        dial_code: '+376',
        countryCodes: ['376'],
        isoCode2: 'AD',
        isoCode3: 'AND'
    },
    {
        label: 'angola (+244)',
        value: '+244',
        country: 'angola',
        country_code: 'AO',
        dial_code: '+244',
        countryCodes: ['244'],
        isoCode2: 'AO',
        isoCode3: 'AGO'
    },
    {
        label: 'anguilla (+1264)',
        value: '+1264',
        country: 'anguilla',
        country_code: 'AI',
        dial_code: '+1264',
        countryCodes: ['1264'],
        isoCode2: 'AI',
        isoCode3: 'AIA'
    },
    {
        label: 'antarctica (+672)',
        value: '+672',
        country: 'antarctica',
        country_code: 'AQ',
        dial_code: '+672',
        countryCodes: ['672'],
        isoCode2: 'AQ',
        isoCode3: 'ATA'
    },
    {
        label: 'antigua and barbuda (+1268)',
        value: '+1268',
        country: 'antigua and barbuda',
        country_code: 'AG',
        dial_code: '+1268',
        countryCodes: ['1268'],
        isoCode2: 'AG',
        isoCode3: 'ATG'
    },
    {
        label: 'argentina (+54)',
        value: '+54',
        country: 'argentina',
        country_code: 'AR',
        dial_code: '+54',
        countryCodes: ['54'],
        isoCode2: 'AR',
        isoCode3: 'ARG'
    },
    {
        label: 'armenia (+374)',
        value: '+374',
        country: 'armenia',
        country_code: 'AM',
        dial_code: '+374',
        countryCodes: ['374'],
        isoCode2: 'AM',
        isoCode3: 'ARM'
    },
    {
        label: 'aruba (+297)',
        value: '+297',
        country: 'aruba',
        country_code: 'AW',
        dial_code: '+297',
        countryCodes: ['297'],
        isoCode2: 'AW',
        isoCode3: 'ABW'
    },
    {
        label: 'australia (+61)',
        value: '+61',
        country: 'australia',
        country_code: 'AU',
        dial_code: '+61',
        countryCodes: ['61'],
        isoCode2: 'AU',
        isoCode3: 'AUS'
    },
    {
        label: 'austria (+43)',
        value: '+43',
        country: 'austria',
        country_code: 'AT',
        dial_code: '+43',
        countryCodes: ['43'],
        isoCode2: 'AT',
        isoCode3: 'AUT'
    },
    {
        label: 'azerbaijan (+994)',
        value: '+994',
        country: 'azerbaijan',
        country_code: 'AZ',
        dial_code: '+994',
        countryCodes: ['994'],
        isoCode2: 'AZ',
        isoCode3: 'AZE'
    },
    {
        label: 'bahamas the (+1242)',
        value: '+1242',
        country: 'bahamas the',
        country_code: 'BS',
        dial_code: '+1242',
        countryCodes: ['1242'],
        isoCode2: 'BS',
        isoCode3: 'BHS'
    },
    {
        label: 'bahrain (+973)',
        value: '+973',
        country: 'bahrain',
        country_code: 'BH',
        dial_code: '+973',
        countryCodes: ['973'],
        isoCode2: 'BH',
        isoCode3: 'BHR'
    },
    {
        label: 'bangladesh (+880)',
        value: '+880',
        country: 'bangladesh',
        country_code: 'BD',
        dial_code: '+880',
        countryCodes: ['880'],
        isoCode2: 'BD',
        isoCode3: 'BGD'
    },
    {
        label: 'barbados (+1246)',
        value: '+1246',
        country: 'barbados',
        country_code: 'BB',
        dial_code: '+1246',
        countryCodes: ['1246'],
        isoCode2: 'BB',
        isoCode3: 'BRB'
    },
    {
        label: 'belarus (+375)',
        value: '+375',
        country: 'belarus',
        country_code: 'BY',
        dial_code: '+375',
        countryCodes: ['375'],
        isoCode2: 'BY',
        isoCode3: 'BLR'
    },
    {
        label: 'belgium (+32)',
        value: '+32',
        country: 'belgium',
        country_code: 'BE',
        dial_code: '+32',
        countryCodes: ['32'],
        isoCode2: 'BE',
        isoCode3: 'BEL'
    },
    {
        label: 'belize (+501)',
        value: '+501',
        country: 'belize',
        country_code: 'BZ',
        dial_code: '+501',
        countryCodes: ['501'],
        isoCode2: 'BZ',
        isoCode3: 'BLZ'
    },
    {
        label: 'benin (+229)',
        value: '+229',
        country: 'benin',
        country_code: 'BJ',
        dial_code: '+229',
        countryCodes: ['229'],
        isoCode2: 'BJ',
        isoCode3: 'BEN'
    },
    {
        label: 'bermuda (+1441)',
        value: '+1441',
        country: 'bermuda',
        country_code: 'BM',
        dial_code: '+1441',
        countryCodes: ['1441'],
        isoCode2: 'BM',
        isoCode3: 'BMU'
    },
    {
        label: 'bhutan (+975)',
        value: '+975',
        country: 'bhutan',
        country_code: 'BT',
        dial_code: '+975',
        countryCodes: ['975'],
        isoCode2: 'BT',
        isoCode3: 'BTN'
    },
    {
        label: 'bolivia (+591)',
        value: '+591',
        country: 'bolivia',
        country_code: 'BO',
        dial_code: '+591',
        countryCodes: ['591'],
        isoCode2: 'BO',
        isoCode3: 'BOL'
    },
    {
        label: 'bosnia and herzegovina (+387)',
        value: '+387',
        country: 'bosnia and herzegovina',
        country_code: 'BA',
        dial_code: '+387',
        countryCodes: ['387'],
        isoCode2: 'BA',
        isoCode3: 'BIH'
    },
    {
        label: 'botswana (+267)',
        value: '+267',
        country: 'botswana',
        country_code: 'BW',
        dial_code: '+267',
        countryCodes: ['267'],
        isoCode2: 'BW',
        isoCode3: 'BWA'
    },
    {
        label: 'bouvet island (+47)',
        value: '+47',
        country: 'bouvet island',
        country_code: 'BV',
        dial_code: '+47',
        countryCodes: ['47'],
        isoCode2: 'BV',
        isoCode3: 'BVT'
    },
    {
        label: 'brazil (+55)',
        value: '+55',
        country: 'brazil',
        country_code: 'BR',
        dial_code: '+55',
        countryCodes: ['55'],
        isoCode2: 'BR',
        isoCode3: 'BRA'
    },
    {
        label: 'british indian ocean territory (+246)',
        value: '+246',
        country: 'british indian ocean territory',
        country_code: 'IO',
        dial_code: '+246',
        countryCodes: ['246'],
        isoCode2: 'IO',
        isoCode3: 'IOT'
    },
    {
        label: 'brunei (+673)',
        value: '+673',
        country: 'brunei',
        country_code: 'BN',
        dial_code: '+673',
        countryCodes: ['673'],
        isoCode2: 'BN',
        isoCode3: 'BRN'
    },
    {
        label: 'bulgaria (+359)',
        value: '+359',
        country: 'bulgaria',
        country_code: 'BG',
        dial_code: '+359',
        countryCodes: ['359'],
        isoCode2: 'BG',
        isoCode3: 'BGR'
    },
    {
        label: 'burkina faso (+226)',
        value: '+226',
        country: 'burkina faso',
        country_code: 'BF',
        dial_code: '+226',
        countryCodes: ['226'],
        isoCode2: 'BF',
        isoCode3: 'BFA'
    },
    {
        label: 'burundi (+257)',
        value: '+257',
        country: 'burundi',
        country_code: 'BI',
        dial_code: '+257',
        countryCodes: ['257'],
        isoCode2: 'BI',
        isoCode3: 'BDI'
    },
    {
        label: 'cambodia (+855)',
        value: '+855',
        country: 'cambodia',
        country_code: 'KH',
        dial_code: '+855',
        countryCodes: ['855'],
        isoCode2: 'KH',
        isoCode3: 'KHM'
    },
    {
        label: 'cameroon (+237)',
        value: '+237',
        country: 'cameroon',
        country_code: 'CM',
        dial_code: '+237',
        countryCodes: ['237'],
        isoCode2: 'CM',
        isoCode3: 'CMR'
    },
    {
        label: 'canada (+1)',
        value: '+1',
        country: 'canada',
        country_code: 'CA',
        dial_code: '+1',
        countryCodes: ['1'],
        isoCode2: 'CA',
        isoCode3: 'CAN'
    },
    {
        label: 'cape verde (+238)',
        value: '+238',
        country: 'cape verde',
        country_code: 'CV',
        dial_code: '+238',
        countryCodes: ['238'],
        isoCode2: 'CV',
        isoCode3: 'CPV'
    },
    {
        label: 'cayman islands (+1345)',
        value: '+1345',
        country: 'cayman islands',
        country_code: 'KY',
        dial_code: '+1345',
        countryCodes: ['1345'],
        isoCode2: 'KY',
        isoCode3: 'CYM'
    },
    {
        label: 'central african republic (+236)',
        value: '+236',
        country: 'central african republic',
        country_code: 'CF',
        dial_code: '+236',
        countryCodes: ['236'],
        isoCode2: 'CF',
        isoCode3: 'CAF'
    },
    {
        label: 'chad (+235)',
        value: '+235',
        country: 'chad',
        country_code: 'TD',
        dial_code: '+235',
        countryCodes: ['235'],
        isoCode2: 'TD',
        isoCode3: 'TCD'
    },
    {
        label: 'chile (+56)',
        value: '+56',
        country: 'chile',
        country_code: 'CL',
        dial_code: '+56',
        countryCodes: ['56'],
        isoCode2: 'CL',
        isoCode3: 'CHL'
    },
    {
        label: 'china (+86)',
        value: '+86',
        country: 'china',
        country_code: 'CN',
        dial_code: '+86',
        countryCodes: ['86'],
        isoCode2: 'CN',
        isoCode3: 'CHN'
    },
    {
        label: 'christmas island (+61)',
        value: '+61',
        country: 'christmas island',
        country_code: 'CX',
        dial_code: '+61',
        countryCodes: ['61'],
        isoCode2: 'CX',
        isoCode3: 'CXR'
    },
    {
        label: 'cocos (keeling) islands (+61)',
        value: '+61',
        country: 'cocos (keeling) islands',
        country_code: 'CC',
        dial_code: '+61',
        countryCodes: ['61'],
        isoCode2: 'CC',
        isoCode3: 'CCK'
    },
    {
        label: 'colombia (+57)',
        value: '+57',
        country: 'colombia',
        country_code: 'CO',
        dial_code: '+57',
        countryCodes: ['57'],
        isoCode2: 'CO',
        isoCode3: 'COL'
    },
    {
        label: 'comoros (+269)',
        value: '+269',
        country: 'comoros',
        country_code: 'KM',
        dial_code: '+269',
        countryCodes: ['269'],
        isoCode2: 'KM',
        isoCode3: 'COM'
    },
    {
        label: 'congo (+242)',
        value: '+242',
        country: 'congo',
        country_code: 'CG',
        dial_code: '+242',
        countryCodes: ['242'],
        isoCode2: 'CG',
        isoCode3: 'COG'
    },
    {
        label: 'congo the democratic republic of the (+243)',
        value: '+243',
        country: 'congo the democratic republic of the',
        country_code: 'CD',
        dial_code: '+243',
        countryCodes: ['243'],
        isoCode2: 'CD',
        isoCode3: 'COD'
    },
    {
        label: 'cook islands (+682)',
        value: '+682',
        country: 'cook islands',
        country_code: 'CK',
        dial_code: '+682',
        countryCodes: ['682'],
        isoCode2: 'CK',
        isoCode3: 'COK'
    },
    {
        label: 'costa rica (+506)',
        value: '+506',
        country: 'costa rica',
        country_code: 'CR',
        dial_code: '+506',
        countryCodes: ['506'],
        isoCode2: 'CR',
        isoCode3: 'CRI'
    },
    {
        label: "cote d'ivoire (ivory coast) (+225)",
        value: '+225',
        country: "cote d'ivoire (ivory coast)",
        country_code: 'CI',
        dial_code: '+225',
        countryCodes: ['225'],
        isoCode2: 'CI',
        isoCode3: 'CIV'
    },
    {
        label: 'croatia (hrvatska) (+385)',
        value: '+385',
        country: 'croatia (hrvatska)',
        country_code: 'HR',
        dial_code: '+385',
        countryCodes: ['385'],
        isoCode2: 'HR',
        isoCode3: 'HRV'
    },
    {
        label: 'cuba (+53)',
        value: '+53',
        country: 'cuba',
        country_code: 'CU',
        dial_code: '+53',
        countryCodes: ['53'],
        isoCode2: 'CU',
        isoCode3: 'CUB'
    },
    {
        label: 'cyprus (+357)',
        value: '+357',
        country: 'cyprus',
        country_code: 'CY',
        dial_code: '+357',
        countryCodes: ['357'],
        isoCode2: 'CY',
        isoCode3: 'CYP'
    },
    {
        label: 'czech republic (+420)',
        value: '+420',
        country: 'czech republic',
        country_code: 'CZ',
        dial_code: '+420',
        countryCodes: ['420'],
        isoCode2: 'CZ',
        isoCode3: 'CZE'
    },
    {
        label: 'denmark (+45)',
        value: '+45',
        country: 'denmark',
        country_code: 'DK',
        dial_code: '+45',
        countryCodes: ['45'],
        isoCode2: 'DK',
        isoCode3: 'DNK'
    },
    {
        label: 'djibouti (+253)',
        value: '+253',
        country: 'djibouti',
        country_code: 'DJ',
        dial_code: '+253',
        countryCodes: ['253'],
        isoCode2: 'DJ',
        isoCode3: 'DJI'
    },
    {
        label: 'dominica (+1767)',
        value: '+1767',
        country: 'dominica',
        country_code: 'DM',
        dial_code: '+1767',
        countryCodes: ['1767'],
        isoCode2: 'DM',
        isoCode3: 'DMA'
    },
    {
        label: 'dominican republic (+1809)',
        value: '+1809',
        country: 'dominican republic',
        country_code: 'DO',
        dial_code: '+1809',
        countryCodes: ['1809'],
        isoCode2: 'DO',
        isoCode3: 'DOM'
    },
    {
        label: 'dominican republic (+1829)',
        value: '+1829',
        country: 'dominican republic',
        country_code: 'DO',
        dial_code: '+1829',
        countryCodes: ['1829'],
        isoCode2: 'DO',
        isoCode3: 'DOM'
    },
    {
        label: 'dominican republic (+1849)',
        value: '+1849',
        country: 'dominican republic',
        country_code: 'DO',
        dial_code: '+1849',
        countryCodes: ['1849'],
        isoCode2: 'DO',
        isoCode3: 'DOM'
    },
    {
        label: 'east timor (+670)',
        value: '+670',
        country: 'east timor',
        country_code: 'TL',
        dial_code: '+670',
        countryCodes: ['670'],
        isoCode2: 'TL',
        isoCode3: 'TLS'
    },
    {
        label: 'ecuador (+593)',
        value: '+593',
        country: 'ecuador',
        country_code: 'EC',
        dial_code: '+593',
        countryCodes: ['593'],
        isoCode2: 'EC',
        isoCode3: 'ECU'
    },
    {
        label: 'egypt (+20)',
        value: '+20',
        country: 'egypt',
        country_code: 'EG',
        dial_code: '+20',
        countryCodes: ['20'],
        isoCode2: 'EG',
        isoCode3: 'EGY'
    },
    {
        label: 'el salvador (+503)',
        value: '+503',
        country: 'el salvador',
        country_code: 'SV',
        dial_code: '+503',
        countryCodes: ['503'],
        isoCode2: 'SV',
        isoCode3: 'SLV'
    },
    {
        label: 'equatorial guinea (+240)',
        value: '+240',
        country: 'equatorial guinea',
        country_code: 'GQ',
        dial_code: '+240',
        countryCodes: ['240'],
        isoCode2: 'GQ',
        isoCode3: 'GNQ'
    },
    {
        label: 'eritrea (+291)',
        value: '+291',
        country: 'eritrea',
        country_code: 'ER',
        dial_code: '+291',
        countryCodes: ['291'],
        isoCode2: 'ER',
        isoCode3: 'ERI'
    },
    {
        label: 'estonia (+372)',
        value: '+372',
        country: 'estonia',
        country_code: 'EE',
        dial_code: '+372',
        countryCodes: ['372'],
        isoCode2: 'EE',
        isoCode3: 'EST'
    },
    {
        label: 'ethiopia (+251)',
        value: '+251',
        country: 'ethiopia',
        country_code: 'ET',
        dial_code: '+251',
        countryCodes: ['251'],
        isoCode2: 'ET',
        isoCode3: 'ETH'
    },
    {
        label: 'external territories of australia (+61)',
        value: '+61',
        country: 'external territories of australia',
        country_code: 'AU',
        dial_code: '+61',
        countryCodes: ['61'],
        isoCode2: 'AU',
        isoCode3: 'AUS'
    },
    {
        label: 'falkland islands (+500)',
        value: '+500',
        country: 'falkland islands',
        country_code: 'FK',
        dial_code: '+500',
        countryCodes: ['500'],
        isoCode2: 'FK',
        isoCode3: 'FLK'
    },
    {
        label: 'faroe islands (+298)',
        value: '+298',
        country: 'faroe islands',
        country_code: 'FO',
        dial_code: '+298',
        countryCodes: ['298'],
        isoCode2: 'FO',
        isoCode3: 'FRO'
    },
    {
        label: 'fiji islands (+679)',
        value: '+679',
        country: 'fiji islands',
        country_code: 'FJ',
        dial_code: '+679',
        countryCodes: ['679'],
        isoCode2: 'FJ',
        isoCode3: 'FJI'
    },
    {
        label: 'finland (+358)',
        value: '+358',
        country: 'finland',
        country_code: 'FI',
        dial_code: '+358',
        countryCodes: ['358'],
        isoCode2: 'FI',
        isoCode3: 'FIN'
    },
    {
        label: 'france (+33)',
        value: '+33',
        country: 'france',
        country_code: 'FR',
        dial_code: '+33',
        countryCodes: ['33'],
        isoCode2: 'FR',
        isoCode3: 'FRA'
    },
    {
        label: 'french guiana (+594)',
        value: '+594',
        country: 'french guiana',
        country_code: 'GF',
        dial_code: '+594',
        countryCodes: ['594'],
        isoCode2: 'GF',
        isoCode3: 'GUF'
    },
    {
        label: 'french polynesia (+689)',
        value: '+689',
        country: 'french polynesia',
        country_code: 'PF',
        dial_code: '+689',
        countryCodes: ['689'],
        isoCode2: 'PF',
        isoCode3: 'PYF'
    },
    {
        label: 'french southern territories (+262)',
        value: '+262',
        country: 'french southern territories',
        country_code: 'TF',
        dial_code: '+262',
        countryCodes: ['262'],
        isoCode2: 'TF',
        isoCode3: 'ATF'
    },
    {
        label: 'gabon (+241)',
        value: '+241',
        country: 'gabon',
        country_code: 'GA',
        dial_code: '+241',
        countryCodes: ['241'],
        isoCode2: 'GA',
        isoCode3: 'GAB'
    },
    {
        label: 'gambia the (+220)',
        value: '+220',
        country: 'gambia the',
        country_code: 'GM',
        dial_code: '+220',
        countryCodes: ['220'],
        isoCode2: 'GM',
        isoCode3: 'GMB'
    },
    {
        label: 'georgia (+995)',
        value: '+995',
        country: 'georgia',
        country_code: 'GE',
        dial_code: '+995',
        countryCodes: ['995'],
        isoCode2: 'GE',
        isoCode3: 'GEO'
    },
    {
        label: 'germany (+49)',
        value: '+49',
        country: 'germany',
        country_code: 'DE',
        dial_code: '+49',
        countryCodes: ['49'],
        isoCode2: 'DE',
        isoCode3: 'DEU'
    },
    {
        label: 'ghana (+233)',
        value: '+233',
        country: 'ghana',
        country_code: 'GH',
        dial_code: '+233',
        countryCodes: ['233'],
        isoCode2: 'GH',
        isoCode3: 'GHA'
    },
    {
        label: 'gibraltar (+350)',
        value: '+350',
        country: 'gibraltar',
        country_code: 'GI',
        dial_code: '+350',
        countryCodes: ['350'],
        isoCode2: 'GI',
        isoCode3: 'GIB'
    },
    {
        label: 'greece (+30)',
        value: '+30',
        country: 'greece',
        country_code: 'GR',
        dial_code: '+30',
        countryCodes: ['30'],
        isoCode2: 'GR',
        isoCode3: 'GRC'
    },
    {
        label: 'greenland (+299)',
        value: '+299',
        country: 'greenland',
        country_code: 'GL',
        dial_code: '+299',
        countryCodes: ['299'],
        isoCode2: 'GL',
        isoCode3: 'GRL'
    },
    {
        label: 'grenada (+1473)',
        value: '+1473',
        country: 'grenada',
        country_code: 'GD',
        dial_code: '+1473',
        countryCodes: ['1473'],
        isoCode2: 'GD',
        isoCode3: 'GRD'
    },
    {
        label: 'guadeloupe (+590)',
        value: '+590',
        country: 'guadeloupe',
        country_code: 'GP',
        dial_code: '+590',
        countryCodes: ['590'],
        isoCode2: 'GP',
        isoCode3: 'GLP'
    },
    {
        label: 'guam (+1671)',
        value: '+1671',
        country: 'guam',
        country_code: 'GU',
        dial_code: '+1671',
        countryCodes: ['1671'],
        isoCode2: 'GU',
        isoCode3: 'GUM'
    },
    {
        label: 'guatemala (+502)',
        value: '+502',
        country: 'guatemala',
        country_code: 'GT',
        dial_code: '+502',
        countryCodes: ['502'],
        isoCode2: 'GT',
        isoCode3: 'GTM'
    },
    {
        label: 'guernsey and alderney (+44)',
        value: '+44',
        country: 'guernsey and alderney',
        country_code: 'GG',
        dial_code: '+44',
        countryCodes: ['44'],
        isoCode2: 'GG',
        isoCode3: 'GGY'
    },
    {
        label: 'guinea (+224)',
        value: '+224',
        country: 'guinea',
        country_code: 'GN',
        dial_code: '+224',
        countryCodes: ['224'],
        isoCode2: 'GN',
        isoCode3: 'GIN'
    },
    {
        label: 'guinea-bissau (+245)',
        value: '+245',
        country: 'guinea-bissau',
        country_code: 'GW',
        dial_code: '+245',
        countryCodes: ['245'],
        isoCode2: 'GW',
        isoCode3: 'GNB'
    },
    {
        label: 'guyana (+592)',
        value: '+592',
        country: 'guyana',
        country_code: 'GY',
        dial_code: '+592',
        countryCodes: ['592'],
        isoCode2: 'GY',
        isoCode3: 'GUY'
    },
    {
        label: 'haiti (+509)',
        value: '+509',
        country: 'haiti',
        country_code: 'HT',
        dial_code: '+509',
        countryCodes: ['509'],
        isoCode2: 'HT',
        isoCode3: 'HTI'
    },
    {
        label: 'heard and mcdonald islands (+672)',
        value: '+672',
        country: 'heard and mcdonald islands',
        country_code: 'HM',
        dial_code: '+672',
        countryCodes: ['672'],
        isoCode2: 'HM',
        isoCode3: 'HMD'
    },
    {
        label: 'honduras (+504)',
        value: '+504',
        country: 'honduras',
        country_code: 'HN',
        dial_code: '+504',
        countryCodes: ['504'],
        isoCode2: 'HN',
        isoCode3: 'HND'
    },
    {
        label: 'hong kong s.a.r. (+852)',
        value: '+852',
        country: 'hong kong s.a.r.',
        country_code: 'HK',
        dial_code: '+852',
        countryCodes: ['852'],
        isoCode2: 'HK',
        isoCode3: 'HKG'
    },
    {
        label: 'hungary (+36)',
        value: '+36',
        country: 'hungary',
        country_code: 'HU',
        dial_code: '+36',
        countryCodes: ['36'],
        isoCode2: 'HU',
        isoCode3: 'HUN'
    },
    {
        label: 'iceland (+354)',
        value: '+354',
        country: 'iceland',
        country_code: 'IS',
        dial_code: '+354',
        countryCodes: ['354'],
        isoCode2: 'IS',
        isoCode3: 'ISL'
    },
    {
        label: 'india (+91)',
        value: '+91',
        country: 'india',
        country_code: 'IN',
        dial_code: '+91',
        countryCodes: ['91'],
        isoCode2: 'IN',
        isoCode3: 'IND'
    },
    {
        label: 'indonesia (+62)',
        value: '+62',
        country: 'indonesia',
        country_code: 'ID',
        dial_code: '+62',
        countryCodes: ['62'],
        isoCode2: 'ID',
        isoCode3: 'IDN'
    },
    {
        label: 'iran (+98)',
        value: '+98',
        country: 'iran',
        country_code: 'IR',
        dial_code: '+98',
        countryCodes: ['98'],
        isoCode2: 'IR',
        isoCode3: 'IRN'
    },
    {
        label: 'iraq (+964)',
        value: '+964',
        country: 'iraq',
        country_code: 'IQ',
        dial_code: '+964',
        countryCodes: ['964'],
        isoCode2: 'IQ',
        isoCode3: 'IRQ'
    },
    {
        label: 'ireland (+353)',
        value: '+353',
        country: 'ireland',
        country_code: 'IE',
        dial_code: '+353',
        countryCodes: ['353'],
        isoCode2: 'IE',
        isoCode3: 'IRL'
    },
    {
        label: 'israel (+972)',
        value: '+972',
        country: 'israel',
        country_code: 'IL',
        dial_code: '+972',
        countryCodes: ['972'],
        isoCode2: 'IL',
        isoCode3: 'ISR'
    },
    {
        label: 'italy (+39)',
        value: '+39',
        country: 'italy',
        country_code: 'IT',
        dial_code: '+39',
        countryCodes: ['39'],
        isoCode2: 'IT',
        isoCode3: 'ITA'
    },
    {
        label: 'jamaica (+1876)',
        value: '+1876',
        country: 'jamaica',
        country_code: 'JM',
        dial_code: '+1876',
        countryCodes: ['1876'],
        isoCode2: 'JM',
        isoCode3: 'JAM'
    },
    {
        label: 'jamaica (+1658)',
        value: '+1658',
        country: 'jamaica',
        country_code: 'JM',
        dial_code: '+1658',
        countryCodes: ['1658'],
        isoCode2: 'JM',
        isoCode3: 'JAM'
    },
    {
        label: 'japan (+81)',
        value: '+81',
        country: 'japan',
        country_code: 'JP',
        dial_code: '+81',
        countryCodes: ['81'],
        isoCode2: 'JP',
        isoCode3: 'JPN'
    },
    {
        label: 'jersey (+44)',
        value: '+44',
        country: 'jersey',
        country_code: 'JE',
        dial_code: '+44',
        countryCodes: ['44'],
        isoCode2: 'JE',
        isoCode3: 'JEY'
    },
    {
        label: 'jordan (+962)',
        value: '+962',
        country: 'jordan',
        country_code: 'JO',
        dial_code: '+962',
        countryCodes: ['962'],
        isoCode2: 'JO',
        isoCode3: 'JOR'
    },
    {
        label: 'kazakhstan (+76)',
        value: '+76',
        country: 'kazakhstan',
        country_code: 'KZ',
        dial_code: '+76',
        countryCodes: ['76'],
        isoCode2: 'KZ',
        isoCode3: 'KAZ'
    },
    {
        label: 'kazakhstan (+77)',
        value: '+77',
        country: 'kazakhstan',
        country_code: 'KZ',
        dial_code: '+77',
        countryCodes: ['77'],
        isoCode2: 'KZ',
        isoCode3: 'KAZ'
    },
    {
        label: 'kenya (+254)',
        value: '+254',
        country: 'kenya',
        country_code: 'KE',
        dial_code: '+254',
        countryCodes: ['254'],
        isoCode2: 'KE',
        isoCode3: 'KEN'
    },
    {
        label: 'kiribati (+686)',
        value: '+686',
        country: 'kiribati',
        country_code: 'KI',
        dial_code: '+686',
        countryCodes: ['686'],
        isoCode2: 'KI',
        isoCode3: 'KIR'
    },
    {
        label: 'korea north (+850)',
        value: '+850',
        country: 'korea north',
        country_code: 'KP',
        dial_code: '+850',
        countryCodes: ['850'],
        isoCode2: 'KP',
        isoCode3: 'PRK'
    },
    {
        label: 'korea south (+82)',
        value: '+82',
        country: 'korea south',
        country_code: 'KR',
        dial_code: '+82',
        countryCodes: ['82'],
        isoCode2: 'KR',
        isoCode3: 'KOR'
    },
    {
        label: 'kuwait (+965)',
        value: '+965',
        country: 'kuwait',
        country_code: 'KW',
        dial_code: '+965',
        countryCodes: ['965'],
        isoCode2: 'KW',
        isoCode3: 'KWT'
    },
    {
        label: 'kyrgyzstan (+996)',
        value: '+996',
        country: 'kyrgyzstan',
        country_code: 'KG',
        dial_code: '+996',
        countryCodes: ['996'],
        isoCode2: 'KG',
        isoCode3: 'KGZ'
    },
    {
        label: 'laos (+856)',
        value: '+856',
        country: 'laos',
        country_code: 'LA',
        dial_code: '+856',
        countryCodes: ['856'],
        isoCode2: 'LA',
        isoCode3: 'LAO'
    },
    {
        label: 'latvia (+371)',
        value: '+371',
        country: 'latvia',
        country_code: 'LV',
        dial_code: '+371',
        countryCodes: ['371'],
        isoCode2: 'LV',
        isoCode3: 'LVA'
    },
    {
        label: 'lebanon (+961)',
        value: '+961',
        country: 'lebanon',
        country_code: 'LB',
        dial_code: '+961',
        countryCodes: ['961'],
        isoCode2: 'LB',
        isoCode3: 'LBN'
    },
    {
        label: 'lesotho (+266)',
        value: '+266',
        country: 'lesotho',
        country_code: 'LS',
        dial_code: '+266',
        countryCodes: ['266'],
        isoCode2: 'LS',
        isoCode3: 'LSO'
    },
    {
        label: 'liberia (+231)',
        value: '+231',
        country: 'liberia',
        country_code: 'LR',
        dial_code: '+231',
        countryCodes: ['231'],
        isoCode2: 'LR',
        isoCode3: 'LBR'
    },
    {
        label: 'libya (+218)',
        value: '+218',
        country: 'libya',
        country_code: 'LY',
        dial_code: '+218',
        countryCodes: ['218'],
        isoCode2: 'LY',
        isoCode3: 'LBY'
    },
    {
        label: 'liechtenstein (+423)',
        value: '+423',
        country: 'liechtenstein',
        country_code: 'LI',
        dial_code: '+423',
        countryCodes: ['423'],
        isoCode2: 'LI',
        isoCode3: 'LIE'
    },
    {
        label: 'lithuania (+370)',
        value: '+370',
        country: 'lithuania',
        country_code: 'LT',
        dial_code: '+370',
        countryCodes: ['370'],
        isoCode2: 'LT',
        isoCode3: 'LTU'
    },
    {
        label: 'luxembourg (+352)',
        value: '+352',
        country: 'luxembourg',
        country_code: 'LU',
        dial_code: '+352',
        countryCodes: ['352'],
        isoCode2: 'LU',
        isoCode3: 'LUX'
    },
    {
        label: 'macau s.a.r. (+853)',
        value: '+853',
        country: 'macau s.a.r.',
        country_code: 'MO',
        dial_code: '+853',
        countryCodes: ['853'],
        isoCode2: 'MO',
        isoCode3: 'MAC'
    },
    {
        label: 'macedonia (+389)',
        value: '+389',
        country: 'macedonia',
        country_code: 'MK',
        dial_code: '+389',
        countryCodes: ['389'],
        isoCode2: 'MK',
        isoCode3: 'MKD'
    },
    {
        label: 'madagascar (+261)',
        value: '+261',
        country: 'madagascar',
        country_code: 'MG',
        dial_code: '+261',
        countryCodes: ['261'],
        isoCode2: 'MG',
        isoCode3: 'MDG'
    },
    {
        label: 'malawi (+265)',
        value: '+265',
        country: 'malawi',
        country_code: 'MW',
        dial_code: '+265',
        countryCodes: ['265'],
        isoCode2: 'MW',
        isoCode3: 'MWI'
    },
    {
        label: 'malaysia (+60)',
        value: '+60',
        country: 'malaysia',
        country_code: 'MY',
        dial_code: '+60',
        countryCodes: ['60'],
        isoCode2: 'MY',
        isoCode3: 'MYS'
    },
    {
        label: 'maldives (+960)',
        value: '+960',
        country: 'maldives',
        country_code: 'MV',
        dial_code: '+960',
        countryCodes: ['960'],
        isoCode2: 'MV',
        isoCode3: 'MDV'
    },
    {
        label: 'mali (+223)',
        value: '+223',
        country: 'mali',
        country_code: 'ML',
        dial_code: '+223',
        countryCodes: ['223'],
        isoCode2: 'ML',
        isoCode3: 'MLI'
    },
    {
        label: 'malta (+356)',
        value: '+356',
        country: 'malta',
        country_code: 'MT',
        dial_code: '+356',
        countryCodes: ['356'],
        isoCode2: 'MT',
        isoCode3: 'MLT'
    },
    {
        label: 'man (isle of) (+44)',
        value: '+44',
        country: 'man (isle of)',
        country_code: 'IM',
        dial_code: '+44',
        countryCodes: ['44'],
        isoCode2: 'IM',
        isoCode3: 'IMN'
    },
    {
        label: 'marshall islands (+692)',
        value: '+692',
        country: 'marshall islands',
        country_code: 'MH',
        dial_code: '+692',
        countryCodes: ['692'],
        isoCode2: 'MH',
        isoCode3: 'MHL'
    },
    {
        label: 'martinique (+596)',
        value: '+596',
        country: 'martinique',
        country_code: 'MQ',
        dial_code: '+596',
        countryCodes: ['596'],
        isoCode2: 'MQ',
        isoCode3: 'MTQ'
    },
    {
        label: 'mauritania (+222)',
        value: '+222',
        country: 'mauritania',
        country_code: 'MR',
        dial_code: '+222',
        countryCodes: ['222'],
        isoCode2: 'MR',
        isoCode3: 'MRT'
    },
    {
        label: 'mauritius (+230)',
        value: '+230',
        country: 'mauritius',
        country_code: 'MU',
        dial_code: '+230',
        countryCodes: ['230'],
        isoCode2: 'MU',
        isoCode3: 'MUS'
    },
    {
        label: 'mayotte (+262)',
        value: '+262',
        country: 'mayotte',
        country_code: 'YT',
        dial_code: '+262',
        countryCodes: ['262'],
        isoCode2: 'YT',
        isoCode3: 'MYT'
    },
    {
        label: 'mexico (+52)',
        value: '+52',
        country: 'mexico',
        country_code: 'MX',
        dial_code: '+52',
        countryCodes: ['52'],
        isoCode2: 'MX',
        isoCode3: 'MEX'
    },
    {
        label: 'micronesia (+691)',
        value: '+691',
        country: 'micronesia',
        country_code: 'FM',
        dial_code: '+691',
        countryCodes: ['691'],
        isoCode2: 'FM',
        isoCode3: 'FSM'
    },
    {
        label: 'moldova (+373)',
        value: '+373',
        country: 'moldova',
        country_code: 'MD',
        dial_code: '+373',
        countryCodes: ['373'],
        isoCode2: 'MD',
        isoCode3: 'MDA'
    },
    {
        label: 'monaco (+377)',
        value: '+377',
        country: 'monaco',
        country_code: 'MC',
        dial_code: '+377',
        countryCodes: ['377'],
        isoCode2: 'MC',
        isoCode3: 'MCO'
    },
    {
        label: 'mongolia (+976)',
        value: '+976',
        country: 'mongolia',
        country_code: 'MN',
        dial_code: '+976',
        countryCodes: ['976'],
        isoCode2: 'MN',
        isoCode3: 'MNG'
    },
    {
        label: 'montserrat (+1664)',
        value: '+1664',
        country: 'montserrat',
        country_code: 'MS',
        dial_code: '+1664',
        countryCodes: ['1664'],
        isoCode2: 'MS',
        isoCode3: 'MSR'
    },
    {
        label: 'morocco (+212)',
        value: '+212',
        country: 'morocco',
        country_code: 'MA',
        dial_code: '+212',
        countryCodes: ['212'],
        isoCode2: 'MA',
        isoCode3: 'MAR'
    },
    {
        label: 'mozambique (+258)',
        value: '+258',
        country: 'mozambique',
        country_code: 'MZ',
        dial_code: '+258',
        countryCodes: ['258'],
        isoCode2: 'MZ',
        isoCode3: 'MOZ'
    },
    {
        label: 'myanmar (+95)',
        value: '+95',
        country: 'myanmar',
        country_code: 'MM',
        dial_code: '+95',
        countryCodes: ['95'],
        isoCode2: 'MM',
        isoCode3: 'MMR'
    },
    {
        label: 'namibia (+264)',
        value: '+264',
        country: 'namibia',
        country_code: 'NA',
        dial_code: '+264',
        countryCodes: ['264'],
        isoCode2: 'NA',
        isoCode3: 'NAM'
    },
    {
        label: 'nauru (+674)',
        value: '+674',
        country: 'nauru',
        country_code: 'NR',
        dial_code: '+674',
        countryCodes: ['674'],
        isoCode2: 'NR',
        isoCode3: 'NRU'
    },
    {
        label: 'nepal (+977)',
        value: '+977',
        country: 'nepal',
        country_code: 'NP',
        dial_code: '+977',
        countryCodes: ['977'],
        isoCode2: 'NP',
        isoCode3: 'NPL'
    },
    {
        label: 'netherlands antilles (+599)',
        value: '+599',
        country: 'netherlands antilles',
        country_code: 'AN',
        dial_code: '+599',
        countryCodes: ['599'],
        isoCode2: 'AN',
        isoCode3: 'ANT'
    },
    {
        label: 'netherlands the (+31)',
        value: '+31',
        country: 'netherlands the',
        country_code: 'NL',
        dial_code: '+31',
        countryCodes: ['31'],
        isoCode2: 'NL',
        isoCode3: 'NLD'
    },
    {
        label: 'new caledonia (+687)',
        value: '+687',
        country: 'new caledonia',
        country_code: 'NC',
        dial_code: '+687',
        countryCodes: ['687'],
        isoCode2: 'NC',
        isoCode3: 'NCL'
    },
    {
        label: 'new zealand (+64)',
        value: '+64',
        country: 'new zealand',
        country_code: 'NZ',
        dial_code: '+64',
        countryCodes: ['64'],
        isoCode2: 'NZ',
        isoCode3: 'NZL'
    },
    {
        label: 'nicaragua (+505)',
        value: '+505',
        country: 'nicaragua',
        country_code: 'NI',
        dial_code: '+505',
        countryCodes: ['505'],
        isoCode2: 'NI',
        isoCode3: 'NIC'
    },
    {
        label: 'niger (+227)',
        value: '+227',
        country: 'niger',
        country_code: 'NE',
        dial_code: '+227',
        countryCodes: ['227'],
        isoCode2: 'NE',
        isoCode3: 'NER'
    },
    {
        label: 'nigeria (+234)',
        value: '+234',
        country: 'nigeria',
        country_code: 'NG',
        dial_code: '+234',
        countryCodes: ['234'],
        isoCode2: 'NG',
        isoCode3: 'NGA'
    },
    {
        label: 'niue (+683)',
        value: '+683',
        country: 'niue',
        country_code: 'NU',
        dial_code: '+683',
        countryCodes: ['683'],
        isoCode2: 'NU',
        isoCode3: 'NIU'
    },
    {
        label: 'norfolk island (+672)',
        value: '+672',
        country: 'norfolk island',
        country_code: 'NF',
        dial_code: '+672',
        countryCodes: ['672'],
        isoCode2: 'NF',
        isoCode3: 'NFK'
    },
    {
        label: 'northern mariana islands (+1670)',
        value: '+1670',
        country: 'northern mariana islands',
        country_code: 'MP',
        dial_code: '+1670',
        countryCodes: ['1670'],
        isoCode2: 'MP',
        isoCode3: 'MNP'
    },
    {
        label: 'norway (+47)',
        value: '+47',
        country: 'norway',
        country_code: 'NO',
        dial_code: '+47',
        countryCodes: ['47'],
        isoCode2: 'NO',
        isoCode3: 'NOR'
    },
    {
        label: 'oman (+968)',
        value: '+968',
        country: 'oman',
        country_code: 'OM',
        dial_code: '+968',
        countryCodes: ['968'],
        isoCode2: 'OM',
        isoCode3: 'OMN'
    },
    {
        label: 'pakistan (+92)',
        value: '+92',
        country: 'pakistan',
        country_code: 'PK',
        dial_code: '+92',
        countryCodes: ['92'],
        isoCode2: 'PK',
        isoCode3: 'PAK'
    },
    {
        label: 'palau (+680)',
        value: '+680',
        country: 'palau',
        country_code: 'PW',
        dial_code: '+680',
        countryCodes: ['680'],
        isoCode2: 'PW',
        isoCode3: 'PLW'
    },
    {
        label: 'palestinian territory occupied (+970)',
        value: '+970',
        country: 'palestinian territory occupied',
        country_code: 'PS',
        dial_code: '+970',
        countryCodes: ['970'],
        isoCode2: 'PS',
        isoCode3: 'PSE'
    },
    {
        label: 'panama (+507)',
        value: '+507',
        country: 'panama',
        country_code: 'PA',
        dial_code: '+507',
        countryCodes: ['507'],
        isoCode2: 'PA',
        isoCode3: 'PAN'
    },
    {
        label: 'papua new guinea (+675)',
        value: '+675',
        country: 'papua new guinea',
        country_code: 'PG',
        dial_code: '+675',
        countryCodes: ['675'],
        isoCode2: 'PG',
        isoCode3: 'PNG'
    },
    {
        label: 'paraguay (+595)',
        value: '+595',
        country: 'paraguay',
        country_code: 'PY',
        dial_code: '+595',
        countryCodes: ['595'],
        isoCode2: 'PY',
        isoCode3: 'PRY'
    },
    {
        label: 'peru (+51)',
        value: '+51',
        country: 'peru',
        country_code: 'PE',
        dial_code: '+51',
        countryCodes: ['51'],
        isoCode2: 'PE',
        isoCode3: 'PER'
    },
    {
        label: 'philippines (+63)',
        value: '+63',
        country: 'philippines',
        country_code: 'PH',
        dial_code: '+63',
        countryCodes: ['63'],
        isoCode2: 'PH',
        isoCode3: 'PHL'
    },
    {
        label: 'pitcairn island (+64)',
        value: '+64',
        country: 'pitcairn island',
        country_code: 'PN',
        dial_code: '+64',
        countryCodes: ['64'],
        isoCode2: 'PN',
        isoCode3: 'PCN'
    },
    {
        label: 'poland (+48)',
        value: '+48',
        country: 'poland',
        country_code: 'PL',
        dial_code: '+48',
        countryCodes: ['48'],
        isoCode2: 'PL',
        isoCode3: 'POL'
    },
    {
        label: 'portugal (+351)',
        value: '+351',
        country: 'portugal',
        country_code: 'PT',
        dial_code: '+351',
        countryCodes: ['351'],
        isoCode2: 'PT',
        isoCode3: 'PRT'
    },
    {
        label: 'puerto rico (+1787)',
        value: '+1787',
        country: 'puerto rico',
        country_code: 'PR',
        dial_code: '+1787',
        countryCodes: ['1787'],
        isoCode2: 'PR',
        isoCode3: 'PRI'
    },
    {
        label: 'puerto rico (+1939)',
        value: '+1939',
        country: 'puerto rico',
        country_code: 'PR',
        dial_code: '+1939',
        countryCodes: ['1939'],
        isoCode2: 'PR',
        isoCode3: 'PRI'
    },
    {
        label: 'qatar (+974)',
        value: '+974',
        country: 'qatar',
        country_code: 'QA',
        dial_code: '+974',
        countryCodes: ['974'],
        isoCode2: 'QA',
        isoCode3: 'QAT'
    },
    {
        label: 'reunion (+262)',
        value: '+262',
        country: 'reunion',
        country_code: 'RE',
        dial_code: '+262',
        countryCodes: ['262'],
        isoCode2: 'RE',
        isoCode3: 'REU'
    },
    {
        label: 'romania (+40)',
        value: '+40',
        country: 'romania',
        country_code: 'RO',
        dial_code: '+40',
        countryCodes: ['40'],
        isoCode2: 'RO',
        isoCode3: 'ROU'
    },
    {
        label: 'russia (+73)',
        value: '+73',
        country: 'russia',
        country_code: 'RU',
        dial_code: '+73',
        countryCodes: ['73'],
        isoCode2: 'RU',
        isoCode3: 'RUS'
    },
    {
        label: 'russia (+74)',
        value: '+74',
        country: 'russia',
        country_code: 'RU',
        dial_code: '+74',
        countryCodes: ['74'],
        isoCode2: 'RU',
        isoCode3: 'RUS'
    },
    {
        label: 'russia (+75)',
        value: '+75',
        country: 'russia',
        country_code: 'RU',
        dial_code: '+75',
        countryCodes: ['75'],
        isoCode2: 'RU',
        isoCode3: 'RUS'
    },
    {
        label: 'russia (+78)',
        value: '+78',
        country: 'russia',
        country_code: 'RU',
        dial_code: '+78',
        countryCodes: ['78'],
        isoCode2: 'RU',
        isoCode3: 'RUS'
    },
    {
        label: 'russia (+79)',
        value: '+79',
        country: 'russia',
        country_code: 'RU',
        dial_code: '+79',
        countryCodes: ['79'],
        isoCode2: 'RU',
        isoCode3: 'RUS'
    },
    {
        label: 'rwanda (+250)',
        value: '+250',
        country: 'rwanda',
        country_code: 'RW',
        dial_code: '+250',
        countryCodes: ['250'],
        isoCode2: 'RW',
        isoCode3: 'RWA'
    },
    {
        label: 'saint helena (+290)',
        value: '+290',
        country: 'saint helena',
        country_code: 'SH',
        dial_code: '+290',
        countryCodes: ['290'],
        isoCode2: 'SH',
        isoCode3: 'SHN'
    },
    {
        label: 'saint helena (+247)',
        value: '+247',
        country: 'saint helena',
        country_code: 'SH',
        dial_code: '+247',
        countryCodes: ['247'],
        isoCode2: 'SH',
        isoCode3: 'SHN'
    },
    {
        label: 'saint kitts and nevis (+1869)',
        value: '+1869',
        country: 'saint kitts and nevis',
        country_code: 'KN',
        dial_code: '+1869',
        countryCodes: ['1869'],
        isoCode2: 'KN',
        isoCode3: 'KNA'
    },
    {
        label: 'saint lucia (+1758)',
        value: '+1758',
        country: 'saint lucia',
        country_code: 'LC',
        dial_code: '+1758',
        countryCodes: ['1758'],
        isoCode2: 'LC',
        isoCode3: 'LCA'
    },
    {
        label: 'saint pierre and miquelon (+508)',
        value: '+508',
        country: 'saint pierre and miquelon',
        country_code: 'PM',
        dial_code: '+508',
        countryCodes: ['508'],
        isoCode2: 'PM',
        isoCode3: 'SPM'
    },
    {
        label: 'saint vincent and the grenadines (+1-784)',
        value: '+1-784',
        country: 'saint vincent and the grenadines',
        country_code: 'VC',
        dial_code: '+1-784',
        countryCodes: ['1-784'],
        isoCode2: 'VC',
        isoCode3: 'VCT'
    },
    {
        label: 'samoa (+685)',
        value: '+685',
        country: 'samoa',
        country_code: 'WS',
        dial_code: '+685',
        countryCodes: ['685'],
        isoCode2: 'WS',
        isoCode3: 'WSM'
    },
    {
        label: 'san marino (+378)',
        value: '+378',
        country: 'san marino',
        country_code: 'SM',
        dial_code: '+378',
        countryCodes: ['378'],
        isoCode2: 'SM',
        isoCode3: 'SMR'
    },
    {
        label: 'sao tome and principe (+239)',
        value: '+239',
        country: 'sao tome and principe',
        country_code: 'ST',
        dial_code: '+239',
        countryCodes: ['239'],
        isoCode2: 'ST',
        isoCode3: 'STP'
    },
    {
        label: 'saudi arabia (+966)',
        value: '+966',
        country: 'saudi arabia',
        country_code: 'SA',
        dial_code: '+966',
        countryCodes: ['966'],
        isoCode2: 'SA',
        isoCode3: 'SAU'
    },
    {
        label: 'senegal (+221)',
        value: '+221',
        country: 'senegal',
        country_code: 'SN',
        dial_code: '+221',
        countryCodes: ['221'],
        isoCode2: 'SN',
        isoCode3: 'SEN'
    },
    {
        label: 'serbia (+381)',
        value: '+381',
        country: 'serbia',
        country_code: 'RS',
        dial_code: '+381',
        countryCodes: ['381'],
        isoCode2: 'RS',
        isoCode3: 'SRB'
    },
    {
        label: 'seychelles (+248)',
        value: '+248',
        country: 'seychelles',
        country_code: 'SC',
        dial_code: '+248',
        countryCodes: ['248'],
        isoCode2: 'SC',
        isoCode3: 'SYC'
    },
    {
        label: 'sierra leone (+232)',
        value: '+232',
        country: 'sierra leone',
        country_code: 'SL',
        dial_code: '+232',
        countryCodes: ['232'],
        isoCode2: 'SL',
        isoCode3: 'SLE'
    },
    {
        label: 'singapore (+65)',
        value: '+65',
        country: 'singapore',
        country_code: 'SG',
        dial_code: '+65',
        countryCodes: ['65'],
        isoCode2: 'SG',
        isoCode3: 'SGP'
    },
    {
        label: 'slovakia (+421)',
        value: '+421',
        country: 'slovakia',
        country_code: 'SK',
        dial_code: '+421',
        countryCodes: ['421'],
        isoCode2: 'SK',
        isoCode3: 'SVK'
    },
    {
        label: 'slovenia (+386)',
        value: '+386',
        country: 'slovenia',
        country_code: 'SI',
        dial_code: '+386',
        countryCodes: ['386'],
        isoCode2: 'SI',
        isoCode3: 'SVN'
    },
    {
        label: 'smaller territories of the uk (+44)',
        value: '+44',
        country: 'smaller territories of the uk',
        country_code: 'GB',
        dial_code: '+44',
        countryCodes: ['44'],
        isoCode2: 'GB',
        isoCode3: 'GBR'
    },
    {
        label: 'solomon islands (+677)',
        value: '+677',
        country: 'solomon islands',
        country_code: 'SB',
        dial_code: '+677',
        countryCodes: ['677'],
        isoCode2: 'SB',
        isoCode3: 'SLB'
    },
    {
        label: 'somalia (+252)',
        value: '+252',
        country: 'somalia',
        country_code: 'SO',
        dial_code: '+252',
        countryCodes: ['252'],
        isoCode2: 'SO',
        isoCode3: 'SOM'
    },
    {
        label: 'south africa (+27)',
        value: '+27',
        country: 'south africa',
        country_code: 'ZA',
        dial_code: '+27',
        countryCodes: ['27'],
        isoCode2: 'ZA',
        isoCode3: 'ZAF'
    },
    {
        label: 'south georgia (+500)',
        value: '+500',
        country: 'south georgia',
        country_code: 'GS',
        dial_code: '+500',
        countryCodes: ['500'],
        isoCode2: 'GS',
        isoCode3: 'SGS'
    },
    {
        label: 'south sudan (+211)',
        value: '+211',
        country: 'south sudan',
        country_code: 'SS',
        dial_code: '+211',
        countryCodes: ['211'],
        isoCode2: 'SS',
        isoCode3: 'SSD'
    },
    {
        label: 'spain (+34)',
        value: '+34',
        country: 'spain',
        country_code: 'ES',
        dial_code: '+34',
        countryCodes: ['34'],
        isoCode2: 'ES',
        isoCode3: 'ESP'
    },
    {
        label: 'sri lanka (+94)',
        value: '+94',
        country: 'sri lanka',
        country_code: 'LK',
        dial_code: '+94',
        countryCodes: ['94'],
        isoCode2: 'LK',
        isoCode3: 'LKA'
    },
    {
        label: 'sudan (+249)',
        value: '+249',
        country: 'sudan',
        country_code: 'SD',
        dial_code: '+249',
        countryCodes: ['249'],
        isoCode2: 'SD',
        isoCode3: 'SDN'
    },
    {
        label: 'suriname (+597)',
        value: '+597',
        country: 'suriname',
        country_code: 'SR',
        dial_code: '+597',
        countryCodes: ['597'],
        isoCode2: 'SR',
        isoCode3: 'SUR'
    },
    {
        label: 'svalbard and jan mayen islands (+4779)',
        value: '+4779',
        country: 'svalbard and jan mayen islands',
        country_code: 'SJ',
        dial_code: '+4779',
        countryCodes: ['4779'],
        isoCode2: 'SJ',
        isoCode3: 'SJM'
    },
    {
        label: 'swaziland (+268)',
        value: '+268',
        country: 'swaziland',
        country_code: 'SZ',
        dial_code: '+268',
        countryCodes: ['268'],
        isoCode2: 'SZ',
        isoCode3: 'SWZ'
    },
    {
        label: 'sweden (+46)',
        value: '+46',
        country: 'sweden',
        country_code: 'SE',
        dial_code: '+46',
        countryCodes: ['46'],
        isoCode2: 'SE',
        isoCode3: 'SWE'
    },
    {
        label: 'switzerland (+41)',
        value: '+41',
        country: 'switzerland',
        country_code: 'CH',
        dial_code: '+41',
        countryCodes: ['41'],
        isoCode2: 'CH',
        isoCode3: 'CHE'
    },
    {
        label: 'syria (+963)',
        value: '+963',
        country: 'syria',
        country_code: 'SY',
        dial_code: '+963',
        countryCodes: ['963'],
        isoCode2: 'SY',
        isoCode3: 'SYR'
    },
    {
        label: 'taiwan (+886)',
        value: '+886',
        country: 'taiwan',
        country_code: 'TW',
        dial_code: '+886',
        countryCodes: ['886'],
        isoCode2: 'TW',
        isoCode3: 'TWN'
    },
    {
        label: 'tajikistan (+992)',
        value: '+992',
        country: 'tajikistan',
        country_code: 'TJ',
        dial_code: '+992',
        countryCodes: ['992'],
        isoCode2: 'TJ',
        isoCode3: 'TJK'
    },
    {
        label: 'tanzania (+255)',
        value: '+255',
        country: 'tanzania',
        country_code: 'TZ',
        dial_code: '+255',
        countryCodes: ['255'],
        isoCode2: 'TZ',
        isoCode3: 'TZA'
    },
    {
        label: 'thailand (+66)',
        value: '+66',
        country: 'thailand',
        country_code: 'TH',
        dial_code: '+66',
        countryCodes: ['66'],
        isoCode2: 'TH',
        isoCode3: 'THA'
    },
    {
        label: 'togo (+228)',
        value: '+228',
        country: 'togo',
        country_code: 'TG',
        dial_code: '+228',
        countryCodes: ['228'],
        isoCode2: 'TG',
        isoCode3: 'TGO'
    },
    {
        label: 'tokelau (+690)',
        value: '+690',
        country: 'tokelau',
        country_code: 'TK',
        dial_code: '+690',
        countryCodes: ['690'],
        isoCode2: 'TK',
        isoCode3: 'TKL'
    },
    {
        label: 'tonga (+676)',
        value: '+676',
        country: 'tonga',
        country_code: 'TO',
        dial_code: '+676',
        countryCodes: ['676'],
        isoCode2: 'TO',
        isoCode3: 'TON'
    },
    {
        label: 'trinidad and tobago (+1868)',
        value: '+1868',
        country: 'trinidad and tobago',
        country_code: 'TT',
        dial_code: '+1868',
        countryCodes: ['1868'],
        isoCode2: 'TT',
        isoCode3: 'TTO'
    },
    {
        label: 'tunisia (+216)',
        value: '+216',
        country: 'tunisia',
        country_code: 'TN',
        dial_code: '+216',
        countryCodes: ['216'],
        isoCode2: 'TN',
        isoCode3: 'TUN'
    },
    {
        label: 'turkey (+90)',
        value: '+90',
        country: 'turkey',
        country_code: 'TR',
        dial_code: '+90',
        countryCodes: ['90'],
        isoCode2: 'TR',
        isoCode3: 'TUR'
    },
    {
        label: 'turkmenistan (+993)',
        value: '+993',
        country: 'turkmenistan',
        country_code: 'TM',
        dial_code: '+993',
        countryCodes: ['993'],
        isoCode2: 'TM',
        isoCode3: 'TKM'
    },
    {
        label: 'turks and caicos islands (+1649)',
        value: '+1649',
        country: 'turks and caicos islands',
        country_code: 'TC',
        dial_code: '+1649',
        countryCodes: ['1649'],
        isoCode2: 'TC',
        isoCode3: 'TCA'
    },
    {
        label: 'tuvalu (+688)',
        value: '+688',
        country: 'tuvalu',
        country_code: 'TV',
        dial_code: '+688',
        countryCodes: ['688'],
        isoCode2: 'TV',
        isoCode3: 'TUV'
    },
    {
        label: 'uganda (+256)',
        value: '+256',
        country: 'uganda',
        country_code: 'UG',
        dial_code: '+256',
        countryCodes: ['256'],
        isoCode2: 'UG',
        isoCode3: 'UGA'
    },
    {
        label: 'ukraine (+380)',
        value: '+380',
        country: 'ukraine',
        country_code: 'UA',
        dial_code: '+380',
        countryCodes: ['380'],
        isoCode2: 'UA',
        isoCode3: 'UKR'
    },
    {
        label: 'united arab emirates (+971)',
        value: '+971',
        country: 'united arab emirates',
        country_code: 'AE',
        dial_code: '+971',
        countryCodes: ['971'],
        isoCode2: 'AE',
        isoCode3: 'ARE'
    },
    {
        label: 'united kingdom (+44)',
        value: '+44',
        country: 'united kingdom',
        country_code: 'GB',
        dial_code: '+44',
        countryCodes: ['44'],
        isoCode2: 'GB',
        isoCode3: 'GBR'
    },
    {
        label: 'united states (+1201)',
        value: '+1201',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1201',
        countryCodes: ['1201'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1202)',
        value: '+1202',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1202',
        countryCodes: ['1202'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1203)',
        value: '+1203',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1203',
        countryCodes: ['1203'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1205)',
        value: '+1205',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1205',
        countryCodes: ['1205'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1206)',
        value: '+1206',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1206',
        countryCodes: ['1206'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1207)',
        value: '+1207',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1207',
        countryCodes: ['1207'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1208)',
        value: '+1208',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1208',
        countryCodes: ['1208'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1209)',
        value: '+1209',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1209',
        countryCodes: ['1209'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1210)',
        value: '+1210',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1210',
        countryCodes: ['1210'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1212)',
        value: '+1212',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1212',
        countryCodes: ['1212'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1213)',
        value: '+1213',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1213',
        countryCodes: ['1213'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1214)',
        value: '+1214',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1214',
        countryCodes: ['1214'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1215)',
        value: '+1215',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1215',
        countryCodes: ['1215'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1216)',
        value: '+1216',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1216',
        countryCodes: ['1216'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1217)',
        value: '+1217',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1217',
        countryCodes: ['1217'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1218)',
        value: '+1218',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1218',
        countryCodes: ['1218'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1219)',
        value: '+1219',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1219',
        countryCodes: ['1219'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1220)',
        value: '+1220',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1220',
        countryCodes: ['1220'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1224)',
        value: '+1224',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1224',
        countryCodes: ['1224'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1225)',
        value: '+1225',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1225',
        countryCodes: ['1225'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1227)',
        value: '+1227',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1227',
        countryCodes: ['1227'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1228)',
        value: '+1228',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1228',
        countryCodes: ['1228'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1229)',
        value: '+1229',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1229',
        countryCodes: ['1229'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1231)',
        value: '+1231',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1231',
        countryCodes: ['1231'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1234)',
        value: '+1234',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1234',
        countryCodes: ['1234'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1239)',
        value: '+1239',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1239',
        countryCodes: ['1239'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1240)',
        value: '+1240',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1240',
        countryCodes: ['1240'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1248)',
        value: '+1248',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1248',
        countryCodes: ['1248'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1251)',
        value: '+1251',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1251',
        countryCodes: ['1251'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1252)',
        value: '+1252',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1252',
        countryCodes: ['1252'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1253)',
        value: '+1253',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1253',
        countryCodes: ['1253'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1254)',
        value: '+1254',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1254',
        countryCodes: ['1254'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1256)',
        value: '+1256',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1256',
        countryCodes: ['1256'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1260)',
        value: '+1260',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1260',
        countryCodes: ['1260'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1262)',
        value: '+1262',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1262',
        countryCodes: ['1262'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1267)',
        value: '+1267',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1267',
        countryCodes: ['1267'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1269)',
        value: '+1269',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1269',
        countryCodes: ['1269'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1270)',
        value: '+1270',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1270',
        countryCodes: ['1270'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1272)',
        value: '+1272',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1272',
        countryCodes: ['1272'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1274)',
        value: '+1274',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1274',
        countryCodes: ['1274'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1276)',
        value: '+1276',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1276',
        countryCodes: ['1276'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1281)',
        value: '+1281',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1281',
        countryCodes: ['1281'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1283)',
        value: '+1283',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1283',
        countryCodes: ['1283'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1301)',
        value: '+1301',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1301',
        countryCodes: ['1301'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1302)',
        value: '+1302',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1302',
        countryCodes: ['1302'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1303)',
        value: '+1303',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1303',
        countryCodes: ['1303'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1304)',
        value: '+1304',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1304',
        countryCodes: ['1304'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1305)',
        value: '+1305',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1305',
        countryCodes: ['1305'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1307)',
        value: '+1307',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1307',
        countryCodes: ['1307'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1308)',
        value: '+1308',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1308',
        countryCodes: ['1308'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1309)',
        value: '+1309',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1309',
        countryCodes: ['1309'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1310)',
        value: '+1310',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1310',
        countryCodes: ['1310'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1312)',
        value: '+1312',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1312',
        countryCodes: ['1312'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1313)',
        value: '+1313',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1313',
        countryCodes: ['1313'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1314)',
        value: '+1314',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1314',
        countryCodes: ['1314'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1315)',
        value: '+1315',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1315',
        countryCodes: ['1315'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1316)',
        value: '+1316',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1316',
        countryCodes: ['1316'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1317)',
        value: '+1317',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1317',
        countryCodes: ['1317'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1318)',
        value: '+1318',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1318',
        countryCodes: ['1318'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1319)',
        value: '+1319',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1319',
        countryCodes: ['1319'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1320)',
        value: '+1320',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1320',
        countryCodes: ['1320'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1321)',
        value: '+1321',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1321',
        countryCodes: ['1321'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1323)',
        value: '+1323',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1323',
        countryCodes: ['1323'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1325)',
        value: '+1325',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1325',
        countryCodes: ['1325'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1327)',
        value: '+1327',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1327',
        countryCodes: ['1327'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1330)',
        value: '+1330',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1330',
        countryCodes: ['1330'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1331)',
        value: '+1331',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1331',
        countryCodes: ['1331'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1334)',
        value: '+1334',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1334',
        countryCodes: ['1334'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1336)',
        value: '+1336',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1336',
        countryCodes: ['1336'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1337)',
        value: '+1337',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1337',
        countryCodes: ['1337'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1339)',
        value: '+1339',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1339',
        countryCodes: ['1339'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1346)',
        value: '+1346',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1346',
        countryCodes: ['1346'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1347)',
        value: '+1347',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1347',
        countryCodes: ['1347'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1351)',
        value: '+1351',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1351',
        countryCodes: ['1351'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1352)',
        value: '+1352',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1352',
        countryCodes: ['1352'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1360)',
        value: '+1360',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1360',
        countryCodes: ['1360'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1361)',
        value: '+1361',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1361',
        countryCodes: ['1361'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1364)',
        value: '+1364',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1364',
        countryCodes: ['1364'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1380)',
        value: '+1380',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1380',
        countryCodes: ['1380'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1385)',
        value: '+1385',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1385',
        countryCodes: ['1385'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1386)',
        value: '+1386',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1386',
        countryCodes: ['1386'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1401)',
        value: '+1401',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1401',
        countryCodes: ['1401'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1402)',
        value: '+1402',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1402',
        countryCodes: ['1402'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1404)',
        value: '+1404',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1404',
        countryCodes: ['1404'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1405)',
        value: '+1405',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1405',
        countryCodes: ['1405'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1406)',
        value: '+1406',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1406',
        countryCodes: ['1406'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1407)',
        value: '+1407',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1407',
        countryCodes: ['1407'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1408)',
        value: '+1408',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1408',
        countryCodes: ['1408'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1409)',
        value: '+1409',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1409',
        countryCodes: ['1409'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1410)',
        value: '+1410',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1410',
        countryCodes: ['1410'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1412)',
        value: '+1412',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1412',
        countryCodes: ['1412'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1413)',
        value: '+1413',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1413',
        countryCodes: ['1413'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1414)',
        value: '+1414',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1414',
        countryCodes: ['1414'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1415)',
        value: '+1415',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1415',
        countryCodes: ['1415'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1417)',
        value: '+1417',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1417',
        countryCodes: ['1417'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1419)',
        value: '+1419',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1419',
        countryCodes: ['1419'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1423)',
        value: '+1423',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1423',
        countryCodes: ['1423'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1424)',
        value: '+1424',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1424',
        countryCodes: ['1424'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1425)',
        value: '+1425',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1425',
        countryCodes: ['1425'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1430)',
        value: '+1430',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1430',
        countryCodes: ['1430'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1432)',
        value: '+1432',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1432',
        countryCodes: ['1432'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1434)',
        value: '+1434',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1434',
        countryCodes: ['1434'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1435)',
        value: '+1435',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1435',
        countryCodes: ['1435'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1440)',
        value: '+1440',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1440',
        countryCodes: ['1440'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1442)',
        value: '+1442',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1442',
        countryCodes: ['1442'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1443)',
        value: '+1443',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1443',
        countryCodes: ['1443'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1447)',
        value: '+1447',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1447',
        countryCodes: ['1447'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1458)',
        value: '+1458',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1458',
        countryCodes: ['1458'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1463)',
        value: '+1463',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1463',
        countryCodes: ['1463'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1464)',
        value: '+1464',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1464',
        countryCodes: ['1464'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1469)',
        value: '+1469',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1469',
        countryCodes: ['1469'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1470)',
        value: '+1470',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1470',
        countryCodes: ['1470'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1475)',
        value: '+1475',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1475',
        countryCodes: ['1475'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1478)',
        value: '+1478',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1478',
        countryCodes: ['1478'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1479)',
        value: '+1479',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1479',
        countryCodes: ['1479'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1480)',
        value: '+1480',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1480',
        countryCodes: ['1480'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1484)',
        value: '+1484',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1484',
        countryCodes: ['1484'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1501)',
        value: '+1501',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1501',
        countryCodes: ['1501'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1502)',
        value: '+1502',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1502',
        countryCodes: ['1502'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1503)',
        value: '+1503',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1503',
        countryCodes: ['1503'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1504)',
        value: '+1504',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1504',
        countryCodes: ['1504'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1505)',
        value: '+1505',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1505',
        countryCodes: ['1505'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1507)',
        value: '+1507',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1507',
        countryCodes: ['1507'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1508)',
        value: '+1508',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1508',
        countryCodes: ['1508'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1509)',
        value: '+1509',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1509',
        countryCodes: ['1509'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1510)',
        value: '+1510',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1510',
        countryCodes: ['1510'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1512)',
        value: '+1512',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1512',
        countryCodes: ['1512'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1513)',
        value: '+1513',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1513',
        countryCodes: ['1513'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1515)',
        value: '+1515',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1515',
        countryCodes: ['1515'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1516)',
        value: '+1516',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1516',
        countryCodes: ['1516'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1517)',
        value: '+1517',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1517',
        countryCodes: ['1517'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1518)',
        value: '+1518',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1518',
        countryCodes: ['1518'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1520)',
        value: '+1520',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1520',
        countryCodes: ['1520'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1530)',
        value: '+1530',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1530',
        countryCodes: ['1530'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1531)',
        value: '+1531',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1531',
        countryCodes: ['1531'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1534)',
        value: '+1534',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1534',
        countryCodes: ['1534'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1539)',
        value: '+1539',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1539',
        countryCodes: ['1539'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1540)',
        value: '+1540',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1540',
        countryCodes: ['1540'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1541)',
        value: '+1541',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1541',
        countryCodes: ['1541'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1551)',
        value: '+1551',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1551',
        countryCodes: ['1551'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1559)',
        value: '+1559',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1559',
        countryCodes: ['1559'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1561)',
        value: '+1561',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1561',
        countryCodes: ['1561'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1562)',
        value: '+1562',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1562',
        countryCodes: ['1562'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1563)',
        value: '+1563',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1563',
        countryCodes: ['1563'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1564)',
        value: '+1564',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1564',
        countryCodes: ['1564'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1567)',
        value: '+1567',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1567',
        countryCodes: ['1567'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1570)',
        value: '+1570',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1570',
        countryCodes: ['1570'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1571)',
        value: '+1571',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1571',
        countryCodes: ['1571'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1573)',
        value: '+1573',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1573',
        countryCodes: ['1573'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1574)',
        value: '+1574',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1574',
        countryCodes: ['1574'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1575)',
        value: '+1575',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1575',
        countryCodes: ['1575'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1580)',
        value: '+1580',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1580',
        countryCodes: ['1580'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1585)',
        value: '+1585',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1585',
        countryCodes: ['1585'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1586)',
        value: '+1586',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1586',
        countryCodes: ['1586'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1601)',
        value: '+1601',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1601',
        countryCodes: ['1601'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1602)',
        value: '+1602',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1602',
        countryCodes: ['1602'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1603)',
        value: '+1603',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1603',
        countryCodes: ['1603'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1605)',
        value: '+1605',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1605',
        countryCodes: ['1605'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1606)',
        value: '+1606',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1606',
        countryCodes: ['1606'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1607)',
        value: '+1607',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1607',
        countryCodes: ['1607'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1608)',
        value: '+1608',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1608',
        countryCodes: ['1608'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1609)',
        value: '+1609',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1609',
        countryCodes: ['1609'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1610)',
        value: '+1610',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1610',
        countryCodes: ['1610'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1612)',
        value: '+1612',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1612',
        countryCodes: ['1612'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1614)',
        value: '+1614',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1614',
        countryCodes: ['1614'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1615)',
        value: '+1615',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1615',
        countryCodes: ['1615'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1616)',
        value: '+1616',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1616',
        countryCodes: ['1616'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1617)',
        value: '+1617',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1617',
        countryCodes: ['1617'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1618)',
        value: '+1618',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1618',
        countryCodes: ['1618'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1619)',
        value: '+1619',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1619',
        countryCodes: ['1619'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1620)',
        value: '+1620',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1620',
        countryCodes: ['1620'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1623)',
        value: '+1623',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1623',
        countryCodes: ['1623'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1626)',
        value: '+1626',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1626',
        countryCodes: ['1626'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1628)',
        value: '+1628',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1628',
        countryCodes: ['1628'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1629)',
        value: '+1629',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1629',
        countryCodes: ['1629'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1630)',
        value: '+1630',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1630',
        countryCodes: ['1630'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1631)',
        value: '+1631',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1631',
        countryCodes: ['1631'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1636)',
        value: '+1636',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1636',
        countryCodes: ['1636'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1641)',
        value: '+1641',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1641',
        countryCodes: ['1641'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1646)',
        value: '+1646',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1646',
        countryCodes: ['1646'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1650)',
        value: '+1650',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1650',
        countryCodes: ['1650'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1651)',
        value: '+1651',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1651',
        countryCodes: ['1651'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1657)',
        value: '+1657',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1657',
        countryCodes: ['1657'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1660)',
        value: '+1660',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1660',
        countryCodes: ['1660'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1661)',
        value: '+1661',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1661',
        countryCodes: ['1661'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1662)',
        value: '+1662',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1662',
        countryCodes: ['1662'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1667)',
        value: '+1667',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1667',
        countryCodes: ['1667'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1669)',
        value: '+1669',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1669',
        countryCodes: ['1669'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1678)',
        value: '+1678',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1678',
        countryCodes: ['1678'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1681)',
        value: '+1681',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1681',
        countryCodes: ['1681'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1682)',
        value: '+1682',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1682',
        countryCodes: ['1682'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1701)',
        value: '+1701',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1701',
        countryCodes: ['1701'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1702)',
        value: '+1702',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1702',
        countryCodes: ['1702'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1703)',
        value: '+1703',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1703',
        countryCodes: ['1703'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1704)',
        value: '+1704',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1704',
        countryCodes: ['1704'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1706)',
        value: '+1706',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1706',
        countryCodes: ['1706'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1707)',
        value: '+1707',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1707',
        countryCodes: ['1707'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1708)',
        value: '+1708',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1708',
        countryCodes: ['1708'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1712)',
        value: '+1712',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1712',
        countryCodes: ['1712'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1713)',
        value: '+1713',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1713',
        countryCodes: ['1713'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1714)',
        value: '+1714',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1714',
        countryCodes: ['1714'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1715)',
        value: '+1715',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1715',
        countryCodes: ['1715'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1716)',
        value: '+1716',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1716',
        countryCodes: ['1716'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1717)',
        value: '+1717',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1717',
        countryCodes: ['1717'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1718)',
        value: '+1718',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1718',
        countryCodes: ['1718'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1719)',
        value: '+1719',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1719',
        countryCodes: ['1719'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1720)',
        value: '+1720',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1720',
        countryCodes: ['1720'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1724)',
        value: '+1724',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1724',
        countryCodes: ['1724'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1725)',
        value: '+1725',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1725',
        countryCodes: ['1725'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1727)',
        value: '+1727',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1727',
        countryCodes: ['1727'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1730)',
        value: '+1730',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1730',
        countryCodes: ['1730'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1731)',
        value: '+1731',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1731',
        countryCodes: ['1731'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1732)',
        value: '+1732',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1732',
        countryCodes: ['1732'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1734)',
        value: '+1734',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1734',
        countryCodes: ['1734'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1737)',
        value: '+1737',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1737',
        countryCodes: ['1737'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1740)',
        value: '+1740',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1740',
        countryCodes: ['1740'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1743)',
        value: '+1743',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1743',
        countryCodes: ['1743'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1747)',
        value: '+1747',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1747',
        countryCodes: ['1747'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1754)',
        value: '+1754',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1754',
        countryCodes: ['1754'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1757)',
        value: '+1757',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1757',
        countryCodes: ['1757'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1760)',
        value: '+1760',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1760',
        countryCodes: ['1760'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1762)',
        value: '+1762',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1762',
        countryCodes: ['1762'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1763)',
        value: '+1763',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1763',
        countryCodes: ['1763'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1765)',
        value: '+1765',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1765',
        countryCodes: ['1765'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1769)',
        value: '+1769',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1769',
        countryCodes: ['1769'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1770)',
        value: '+1770',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1770',
        countryCodes: ['1770'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1772)',
        value: '+1772',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1772',
        countryCodes: ['1772'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1773)',
        value: '+1773',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1773',
        countryCodes: ['1773'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1774)',
        value: '+1774',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1774',
        countryCodes: ['1774'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1775)',
        value: '+1775',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1775',
        countryCodes: ['1775'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1779)',
        value: '+1779',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1779',
        countryCodes: ['1779'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1781)',
        value: '+1781',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1781',
        countryCodes: ['1781'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1785)',
        value: '+1785',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1785',
        countryCodes: ['1785'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1786)',
        value: '+1786',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1786',
        countryCodes: ['1786'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1801)',
        value: '+1801',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1801',
        countryCodes: ['1801'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1802)',
        value: '+1802',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1802',
        countryCodes: ['1802'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1803)',
        value: '+1803',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1803',
        countryCodes: ['1803'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1804)',
        value: '+1804',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1804',
        countryCodes: ['1804'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1805)',
        value: '+1805',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1805',
        countryCodes: ['1805'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1806)',
        value: '+1806',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1806',
        countryCodes: ['1806'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1808)',
        value: '+1808',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1808',
        countryCodes: ['1808'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1810)',
        value: '+1810',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1810',
        countryCodes: ['1810'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1812)',
        value: '+1812',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1812',
        countryCodes: ['1812'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1813)',
        value: '+1813',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1813',
        countryCodes: ['1813'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1814)',
        value: '+1814',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1814',
        countryCodes: ['1814'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1815)',
        value: '+1815',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1815',
        countryCodes: ['1815'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1816)',
        value: '+1816',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1816',
        countryCodes: ['1816'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1817)',
        value: '+1817',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1817',
        countryCodes: ['1817'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1818)',
        value: '+1818',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1818',
        countryCodes: ['1818'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1828)',
        value: '+1828',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1828',
        countryCodes: ['1828'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1830)',
        value: '+1830',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1830',
        countryCodes: ['1830'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1831)',
        value: '+1831',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1831',
        countryCodes: ['1831'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1832)',
        value: '+1832',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1832',
        countryCodes: ['1832'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1843)',
        value: '+1843',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1843',
        countryCodes: ['1843'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1845)',
        value: '+1845',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1845',
        countryCodes: ['1845'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1847)',
        value: '+1847',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1847',
        countryCodes: ['1847'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1848)',
        value: '+1848',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1848',
        countryCodes: ['1848'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1850)',
        value: '+1850',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1850',
        countryCodes: ['1850'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1854)',
        value: '+1854',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1854',
        countryCodes: ['1854'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1856)',
        value: '+1856',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1856',
        countryCodes: ['1856'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1857)',
        value: '+1857',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1857',
        countryCodes: ['1857'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1858)',
        value: '+1858',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1858',
        countryCodes: ['1858'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1859)',
        value: '+1859',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1859',
        countryCodes: ['1859'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1860)',
        value: '+1860',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1860',
        countryCodes: ['1860'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1862)',
        value: '+1862',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1862',
        countryCodes: ['1862'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1863)',
        value: '+1863',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1863',
        countryCodes: ['1863'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1864)',
        value: '+1864',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1864',
        countryCodes: ['1864'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1865)',
        value: '+1865',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1865',
        countryCodes: ['1865'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1870)',
        value: '+1870',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1870',
        countryCodes: ['1870'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1872)',
        value: '+1872',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1872',
        countryCodes: ['1872'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1878)',
        value: '+1878',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1878',
        countryCodes: ['1878'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1901)',
        value: '+1901',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1901',
        countryCodes: ['1901'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1903)',
        value: '+1903',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1903',
        countryCodes: ['1903'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1904)',
        value: '+1904',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1904',
        countryCodes: ['1904'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1906)',
        value: '+1906',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1906',
        countryCodes: ['1906'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1907)',
        value: '+1907',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1907',
        countryCodes: ['1907'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1908)',
        value: '+1908',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1908',
        countryCodes: ['1908'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1909)',
        value: '+1909',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1909',
        countryCodes: ['1909'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1910)',
        value: '+1910',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1910',
        countryCodes: ['1910'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1912)',
        value: '+1912',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1912',
        countryCodes: ['1912'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1913)',
        value: '+1913',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1913',
        countryCodes: ['1913'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1914)',
        value: '+1914',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1914',
        countryCodes: ['1914'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1915)',
        value: '+1915',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1915',
        countryCodes: ['1915'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1916)',
        value: '+1916',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1916',
        countryCodes: ['1916'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1917)',
        value: '+1917',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1917',
        countryCodes: ['1917'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1918)',
        value: '+1918',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1918',
        countryCodes: ['1918'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1919)',
        value: '+1919',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1919',
        countryCodes: ['1919'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1920)',
        value: '+1920',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1920',
        countryCodes: ['1920'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1925)',
        value: '+1925',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1925',
        countryCodes: ['1925'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1928)',
        value: '+1928',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1928',
        countryCodes: ['1928'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1929)',
        value: '+1929',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1929',
        countryCodes: ['1929'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1930)',
        value: '+1930',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1930',
        countryCodes: ['1930'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1931)',
        value: '+1931',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1931',
        countryCodes: ['1931'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1934)',
        value: '+1934',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1934',
        countryCodes: ['1934'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1936)',
        value: '+1936',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1936',
        countryCodes: ['1936'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1937)',
        value: '+1937',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1937',
        countryCodes: ['1937'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1938)',
        value: '+1938',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1938',
        countryCodes: ['1938'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1940)',
        value: '+1940',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1940',
        countryCodes: ['1940'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1941)',
        value: '+1941',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1941',
        countryCodes: ['1941'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1947)',
        value: '+1947',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1947',
        countryCodes: ['1947'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1949)',
        value: '+1949',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1949',
        countryCodes: ['1949'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1951)',
        value: '+1951',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1951',
        countryCodes: ['1951'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1952)',
        value: '+1952',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1952',
        countryCodes: ['1952'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1954)',
        value: '+1954',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1954',
        countryCodes: ['1954'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1956)',
        value: '+1956',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1956',
        countryCodes: ['1956'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1959)',
        value: '+1959',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1959',
        countryCodes: ['1959'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1970)',
        value: '+1970',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1970',
        countryCodes: ['1970'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1971)',
        value: '+1971',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1971',
        countryCodes: ['1971'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1972)',
        value: '+1972',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1972',
        countryCodes: ['1972'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1973)',
        value: '+1973',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1973',
        countryCodes: ['1973'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1975)',
        value: '+1975',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1975',
        countryCodes: ['1975'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1978)',
        value: '+1978',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1978',
        countryCodes: ['1978'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1979)',
        value: '+1979',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1979',
        countryCodes: ['1979'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1980)',
        value: '+1980',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1980',
        countryCodes: ['1980'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1984)',
        value: '+1984',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1984',
        countryCodes: ['1984'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1985)',
        value: '+1985',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1985',
        countryCodes: ['1985'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states (+1989)',
        value: '+1989',
        country: 'united states',
        country_code: 'US',
        dial_code: '+1989',
        countryCodes: ['1989'],
        isoCode2: 'US',
        isoCode3: 'USA'
    },
    {
        label: 'united states minor outlying islands (+268)',
        value: '+268',
        country: 'united states minor outlying islands',
        country_code: 'UM',
        dial_code: '+268',
        countryCodes: ['268'],
        isoCode2: 'UM',
        isoCode3: 'UMI'
    },
    {
        label: 'uruguay (+598)',
        value: '+598',
        country: 'uruguay',
        country_code: 'UY',
        dial_code: '+598',
        countryCodes: ['598'],
        isoCode2: 'UY',
        isoCode3: 'URY'
    },
    {
        label: 'uzbekistan (+998)',
        value: '+998',
        country: 'uzbekistan',
        country_code: 'UZ',
        dial_code: '+998',
        countryCodes: ['998'],
        isoCode2: 'UZ',
        isoCode3: 'UZB'
    },
    {
        label: 'vanuatu (+678)',
        value: '+678',
        country: 'vanuatu',
        country_code: 'VU',
        dial_code: '+678',
        countryCodes: ['678'],
        isoCode2: 'VU',
        isoCode3: 'VUT'
    },
    {
        label: 'vatican city state (holy see) (+3906698)',
        value: '+3906698',
        country: 'vatican city state (holy see)',
        country_code: 'VA',
        dial_code: '+3906698',
        countryCodes: ['3906698'],
        isoCode2: 'VA',
        isoCode3: 'VAT'
    },
    {
        label: 'vatican city state (holy see) (+379)',
        value: '+379',
        country: 'vatican city state (holy see)',
        country_code: 'VA',
        dial_code: '+379',
        countryCodes: ['379'],
        isoCode2: 'VA',
        isoCode3: 'VAT'
    },
    {
        label: 'venezuela (+58)',
        value: '+58',
        country: 'venezuela',
        country_code: 'VE',
        dial_code: '+58',
        countryCodes: ['58'],
        isoCode2: 'VE',
        isoCode3: 'VEN'
    },
    {
        label: 'vietnam (+84)',
        value: '+84',
        country: 'vietnam',
        country_code: 'VN',
        dial_code: '+84',
        countryCodes: ['84'],
        isoCode2: 'VN',
        isoCode3: 'VNM'
    },
    {
        label: 'virgin islands (british) (+1284)',
        value: '+1284',
        country: 'virgin islands (british)',
        country_code: 'VG',
        dial_code: '+1284',
        countryCodes: ['1284'],
        isoCode2: 'VG',
        isoCode3: 'VGB'
    },
    {
        label: 'virgin islands (us) (+1340)',
        value: '+1340',
        country: 'virgin islands (us)',
        country_code: 'VI',
        dial_code: '+1340',
        countryCodes: ['1340'],
        isoCode2: 'VI',
        isoCode3: 'VIR'
    },
    {
        label: 'wallis and futuna islands (+681)',
        value: '+681',
        country: 'wallis and futuna islands',
        country_code: 'WF',
        dial_code: '+681',
        countryCodes: ['681'],
        isoCode2: 'WF',
        isoCode3: 'WLF'
    },
    {
        label: 'western sahara (+2125288)',
        value: '+2125288',
        country: 'western sahara',
        country_code: 'EH',
        dial_code: '+2125288',
        countryCodes: ['2125288'],
        isoCode2: 'EH',
        isoCode3: 'ESH'
    },
    {
        label: 'western sahara (+2125289)',
        value: '+2125289',
        country: 'western sahara',
        country_code: 'EH',
        dial_code: '+2125289',
        countryCodes: ['2125289'],
        isoCode2: 'EH',
        isoCode3: 'ESH'
    },
    {
        label: 'yemen (+967)',
        value: '+967',
        country: 'yemen',
        country_code: 'YE',
        dial_code: '+967',
        countryCodes: ['967'],
        isoCode2: 'YE',
        isoCode3: 'YEM'
    },
    {
        label: 'yugoslavia (+38)',
        value: '+38',
        country: 'yugoslavia',
        country_code: 'YU',
        dial_code: '+38',
        countryCodes: ['38'],
        isoCode2: 'YU',
        isoCode3: 'YUG'
    },
    {
        label: 'zambia (+260)',
        value: '+260',
        country: 'zambia',
        country_code: 'ZM',
        dial_code: '+260',
        countryCodes: ['260'],
        isoCode2: 'ZM',
        isoCode3: 'ZMB'
    },
    {
        label: 'zimbabwe (+263)',
        value: '+263',
        country: 'zimbabwe',
        country_code: 'ZW',
        dial_code: '+263',
        countryCodes: ['263'],
        isoCode2: 'ZW',
        isoCode3: 'ZWE'
    }
];
const phoneNumberData = {
    countries,
    dialCodes
};

const PHONE_METADATA = {
    AC: { lengths: [5], groups: [3, 3, 1] },
    AD: { lengths: [6, 9], groups: [3, 3] },
    AE: { lengths: [9], groups: [3, 1, 5] },
    AF: { lengths: [9], groups: [2, 3, 4] },
    AG: { lengths: [10], groups: [3, 3, 4] },
    AI: { lengths: [10], groups: [3, 3, 4] },
    AL: { lengths: [9], groups: [2, 3, 4] },
    AM: { lengths: [8], groups: [3, 2, 3] },
    AO: { lengths: [9], groups: [3, 3, 3] },
    AR: { lengths: [10], groups: [4, 2, 4] },
    AS: { lengths: [10], groups: [3, 3, 4] },
    AT: { lengths: [7, 8, 9, 10, 11, 12, 13], groups: [2, 5] },
    AU: { lengths: [9], groups: [3, 3, 3] },
    AW: { lengths: [7], groups: [3, 4] },
    AX: { lengths: [6, 7, 8, 9, 10], groups: [3, 3, 4] },
    AZ: { lengths: [9], groups: [3, 2, 2, 2] },
    BA: { lengths: [8], groups: [2, 3, 3] },
    BB: { lengths: [10], groups: [3, 3, 4] },
    BD: { lengths: [10], groups: [3, 7] },
    BE: { lengths: [9], groups: [3, 2, 2, 2] },
    BF: { lengths: [8], groups: [2, 2, 2, 2] },
    BG: { lengths: [8, 9], groups: [1, 3, 4] },
    BH: { lengths: [8], groups: [4, 4] },
    BI: { lengths: [8], groups: [2, 2, 2, 2] },
    BJ: { lengths: [10], groups: [2, 2, 2, 2, 2] },
    BL: { lengths: [9], groups: [3, 3, 3] },
    BM: { lengths: [10], groups: [3, 3, 4] },
    BN: { lengths: [7], groups: [3, 4] },
    BO: { lengths: [8], groups: [1, 7] },
    BQ: { lengths: [7], groups: [3, 3, 1] },
    BR: { lengths: [10, 11], groups: [3, 3, 4] },
    BS: { lengths: [10], groups: [3, 3, 4] },
    BT: { lengths: [8], groups: [2, 2, 2, 2] },
    BW: { lengths: [8], groups: [2, 3, 3] },
    BY: { lengths: [9], groups: [3, 2, 4] },
    BZ: { lengths: [7], groups: [3, 4] },
    CA: { lengths: [10], groups: [3, 3, 4] },
    CC: { lengths: [9], groups: [3, 3, 3] },
    CD: { lengths: [7, 9], groups: [2, 2, 3] },
    CF: { lengths: [8], groups: [2, 2, 2, 2] },
    CG: { lengths: [9], groups: [1, 4, 4] },
    CH: { lengths: [9], groups: [3, 3, 3] },
    CI: { lengths: [10], groups: [2, 2, 1, 5] },
    CK: { lengths: [5], groups: [2, 3] },
    CL: { lengths: [9], groups: [5, 4] },
    CM: { lengths: [9], groups: [1, 2, 2, 2, 2] },
    CN: { lengths: [11], groups: [3, 8] },
    CO: { lengths: [10], groups: [3, 7] },
    CR: { lengths: [8], groups: [4, 4] },
    CU: { lengths: [8], groups: [2, 6] },
    CV: { lengths: [7], groups: [3, 2, 2] },
    CW: { lengths: [7, 8], groups: [3, 4] },
    CX: { lengths: [9], groups: [3, 3, 3] },
    CY: { lengths: [8], groups: [2, 6] },
    CZ: { lengths: [9], groups: [3, 3, 3] },
    DE: { lengths: [10, 11], groups: [3, 8] },
    DJ: { lengths: [8], groups: [2, 2, 2, 2] },
    DK: { lengths: [8], groups: [2, 2, 2, 2] },
    DM: { lengths: [10], groups: [3, 3, 4] },
    DO: { lengths: [10], groups: [3, 3, 4] },
    DZ: { lengths: [9], groups: [2, 3, 2, 2] },
    EC: { lengths: [9], groups: [2, 3, 4] },
    EE: { lengths: [7, 8], groups: [3, 4] },
    EG: { lengths: [10], groups: [3, 3, 4] },
    EH: { lengths: [9], groups: [3, 3, 3] },
    ER: { lengths: [7], groups: [1, 3, 3] },
    ES: { lengths: [9], groups: [3, 3, 3] },
    ET: { lengths: [9], groups: [2, 3, 4] },
    FI: { lengths: [6, 7, 8, 9, 10], groups: [3, 7] },
    FJ: { lengths: [7], groups: [3, 4] },
    FK: { lengths: [5], groups: [3, 3, 1] },
    FM: { lengths: [7], groups: [3, 4] },
    FO: { lengths: [6], groups: [3, 3, 1] },
    FR: { lengths: [9], groups: [3, 2, 2, 2] },
    GA: { lengths: [8], groups: [2, 2, 2, 2] },
    GB: { lengths: [10], groups: [5, 5] },
    GD: { lengths: [10], groups: [3, 3, 4] },
    GE: { lengths: [9], groups: [3, 3, 3] },
    GF: { lengths: [9], groups: [3, 2, 2, 2] },
    GG: { lengths: [10], groups: [3, 3, 4] },
    GH: { lengths: [9], groups: [2, 3, 4] },
    GI: { lengths: [8], groups: [3, 5] },
    GL: { lengths: [6], groups: [2, 2, 2] },
    GM: { lengths: [7], groups: [3, 4] },
    GN: { lengths: [9], groups: [3, 2, 2, 2] },
    GP: { lengths: [9], groups: [3, 2, 2, 2] },
    GQ: { lengths: [9], groups: [3, 3, 3] },
    GR: { lengths: [10], groups: [2, 4, 4] },
    GT: { lengths: [8], groups: [4, 4] },
    GU: { lengths: [10], groups: [3, 3, 4] },
    GW: { lengths: [9], groups: [3, 3, 3] },
    GY: { lengths: [7], groups: [3, 4] },
    HK: { lengths: [8], groups: [3, 5] },
    HN: { lengths: [8], groups: [4, 4] },
    HR: { lengths: [8, 9], groups: [3, 2, 3] },
    HT: { lengths: [8], groups: [2, 2, 4] },
    HU: { lengths: [9], groups: [2, 3, 4] },
    ID: { lengths: [9, 10, 11, 12], groups: [3, 7] },
    IE: { lengths: [9], groups: [1, 4, 4] },
    IL: { lengths: [9], groups: [2, 3, 4] },
    IM: { lengths: [10], groups: [3, 3, 4] },
    IN: { lengths: [10], groups: [5, 5] },
    IO: { lengths: [7], groups: [3, 4] },
    IQ: { lengths: [10], groups: [3, 3, 4] },
    IR: { lengths: [10], groups: [3, 3, 4] },
    IS: { lengths: [7], groups: [3, 4] },
    IT: { lengths: [9, 10], groups: [3, 6] },
    JE: { lengths: [10], groups: [3, 3, 4] },
    JM: { lengths: [10], groups: [3, 3, 4] },
    JO: { lengths: [9], groups: [3, 6] },
    JP: { lengths: [10], groups: [3, 3, 4] },
    KE: { lengths: [9], groups: [2, 7] },
    KG: { lengths: [9], groups: [4, 5] },
    KH: { lengths: [8, 9], groups: [2, 3, 4] },
    KI: { lengths: [8], groups: [4, 4] },
    KM: { lengths: [7], groups: [3, 2, 2] },
    KN: { lengths: [10], groups: [3, 3, 4] },
    KP: { lengths: [10], groups: [3, 3, 4] },
    KR: { lengths: [9, 10], groups: [1, 4, 4] },
    KW: { lengths: [8], groups: [4, 4] },
    KY: { lengths: [10], groups: [3, 3, 4] },
    KZ: { lengths: [10], groups: [3, 3, 4] },
    LA: { lengths: [9, 10], groups: [2, 2, 2, 3] },
    LB: { lengths: [7, 8], groups: [1, 3, 3] },
    LC: { lengths: [10], groups: [3, 3, 4] },
    LI: { lengths: [7], groups: [3, 2, 2] },
    LK: { lengths: [9], groups: [2, 3, 4] },
    LR: { lengths: [7, 9], groups: [1, 3, 3] },
    LS: { lengths: [8], groups: [4, 4] },
    LT: { lengths: [8], groups: [1, 3, 4] },
    LU: { lengths: [9], groups: [2, 2, 2, 3] },
    LV: { lengths: [8], groups: [2, 3, 3] },
    LY: { lengths: [9], groups: [2, 7] },
    MA: { lengths: [9], groups: [4, 5] },
    MC: { lengths: [8], groups: [2, 3, 3] },
    MD: { lengths: [8], groups: [3, 5] },
    ME: { lengths: [8], groups: [4, 4] },
    MF: { lengths: [9], groups: [3, 3, 3] },
    MG: { lengths: [9], groups: [2, 2, 3, 2] },
    MH: { lengths: [7], groups: [3, 4] },
    MK: { lengths: [8], groups: [1, 3, 4] },
    ML: { lengths: [8], groups: [2, 2, 2, 2] },
    MM: { lengths: [7, 8, 9, 10], groups: [2, 2, 3] },
    MN: { lengths: [8], groups: [2, 2, 4] },
    MO: { lengths: [8], groups: [4, 4] },
    MP: { lengths: [10], groups: [3, 3, 4] },
    MQ: { lengths: [9], groups: [3, 2, 2, 2] },
    MR: { lengths: [8], groups: [2, 2, 2, 2] },
    MS: { lengths: [10], groups: [3, 3, 4] },
    MT: { lengths: [8], groups: [4, 4] },
    MU: { lengths: [8], groups: [4, 4] },
    MV: { lengths: [7], groups: [3, 4] },
    MW: { lengths: [9], groups: [3, 3, 3] },
    MX: { lengths: [10], groups: [2, 4, 4] },
    MY: { lengths: [9, 10], groups: [2, 3, 4] },
    MZ: { lengths: [9], groups: [2, 3, 4] },
    NA: { lengths: [9], groups: [2, 3, 4] },
    NC: { lengths: [6], groups: [2, 2, 2] },
    NE: { lengths: [8], groups: [2, 3, 3] },
    NF: { lengths: [6], groups: [2, 4] },
    NG: { lengths: [10], groups: [3, 3, 4] },
    NI: { lengths: [8], groups: [4, 4] },
    NL: { lengths: [9, 11], groups: [2, 7] },
    NO: { lengths: [8], groups: [3, 2, 3] },
    NP: { lengths: [10], groups: [3, 7] },
    NR: { lengths: [7], groups: [3, 4] },
    NU: { lengths: [4], groups: [3, 3, 1] },
    NZ: { lengths: [8, 9, 10], groups: [3, 2, 3] },
    OM: { lengths: [8], groups: [2, 6] },
    PA: { lengths: [7, 8], groups: [3, 4] },
    PE: { lengths: [9], groups: [3, 3, 3] },
    PF: { lengths: [8], groups: [2, 2, 2, 2] },
    PG: { lengths: [8], groups: [4, 4] },
    PH: { lengths: [10], groups: [4, 6] },
    PK: { lengths: [10], groups: [3, 7] },
    PL: { lengths: [9], groups: [3, 3, 3] },
    PM: { lengths: [6, 9], groups: [2, 2, 2] },
    PR: { lengths: [10], groups: [3, 3, 4] },
    PS: { lengths: [9], groups: [3, 3, 3] },
    PT: { lengths: [9], groups: [2, 3, 4] },
    PW: { lengths: [7], groups: [3, 4] },
    PY: { lengths: [9], groups: [3, 6] },
    QA: { lengths: [8], groups: [4, 4] },
    RE: { lengths: [9], groups: [3, 2, 2, 2] },
    RO: { lengths: [9], groups: [2, 3, 4] },
    RS: { lengths: [8, 9, 10], groups: [3, 3, 4] },
    RU: { lengths: [10], groups: [4, 2, 2, 2] },
    RW: { lengths: [9], groups: [3, 3, 3] },
    SA: { lengths: [9], groups: [4, 5] },
    SB: { lengths: [5], groups: [3, 3, 1] },
    SC: { lengths: [7], groups: [1, 3, 3] },
    SD: { lengths: [9], groups: [2, 3, 4] },
    SE: { lengths: [9], groups: [3, 3, 3] },
    SG: { lengths: [8], groups: [4, 4] },
    SH: { lengths: [5], groups: [3, 3, 1] },
    SI: { lengths: [8], groups: [2, 6] },
    SJ: { lengths: [8], groups: [4, 4] },
    SK: { lengths: [9], groups: [1, 3, 3, 2] },
    SL: { lengths: [8], groups: [2, 6] },
    SM: { lengths: [8], groups: [2, 2, 2, 2] },
    SN: { lengths: [9], groups: [3, 2, 2, 2] },
    SO: { lengths: [7, 8, 9], groups: [1, 6] },
    SR: { lengths: [7], groups: [3, 4] },
    SS: { lengths: [9], groups: [3, 3, 3] },
    ST: { lengths: [7], groups: [3, 4] },
    SV: { lengths: [8], groups: [4, 4] },
    SX: { lengths: [10], groups: [3, 3, 4] },
    SY: { lengths: [9], groups: [2, 3, 4] },
    SZ: { lengths: [8], groups: [4, 4] },
    TA: { lengths: [4], groups: [3, 3, 1] },
    TC: { lengths: [10], groups: [3, 3, 4] },
    TD: { lengths: [8], groups: [2, 2, 2, 2] },
    TG: { lengths: [8], groups: [2, 2, 2, 2] },
    TH: { lengths: [9], groups: [2, 3, 4] },
    TJ: { lengths: [9], groups: [6, 1, 2] },
    TK: { lengths: [4, 5, 6, 7], groups: [3, 3, 1] },
    TL: { lengths: [8], groups: [4, 4] },
    TM: { lengths: [8], groups: [2, 2, 2, 2] },
    TN: { lengths: [8], groups: [2, 3, 3] },
    TO: { lengths: [7], groups: [4, 3] },
    TR: { lengths: [10], groups: [3, 3, 4] },
    TT: { lengths: [10], groups: [3, 3, 4] },
    TV: { lengths: [6, 7], groups: [2, 4] },
    TW: { lengths: [9], groups: [2, 3, 4] },
    TZ: { lengths: [9], groups: [3, 2, 4] },
    UA: { lengths: [9], groups: [3, 3, 3] },
    UG: { lengths: [9], groups: [4, 5] },
    US: { lengths: [10], groups: [3, 3, 4] },
    UY: { lengths: [8], groups: [2, 3, 3] },
    UZ: { lengths: [9], groups: [2, 3, 2, 2] },
    VA: { lengths: [9, 10], groups: [3, 3, 4] },
    VC: { lengths: [10], groups: [3, 3, 4] },
    VE: { lengths: [10], groups: [3, 7] },
    VG: { lengths: [10], groups: [3, 3, 4] },
    VI: { lengths: [10], groups: [3, 3, 4] },
    VN: { lengths: [9], groups: [2, 3, 2, 2] },
    VU: { lengths: [7], groups: [3, 4] },
    WF: { lengths: [6], groups: [2, 2, 2] },
    WS: { lengths: [7, 10], groups: [2, 5] },
    XK: { lengths: [8], groups: [3, 5] },
    YE: { lengths: [9], groups: [3, 3, 3] },
    YT: { lengths: [9], groups: [3, 3, 3] },
    ZA: { lengths: [5, 6, 7, 8, 9], groups: [2, 4] },
    ZM: { lengths: [9], groups: [3, 3, 3] },
    ZW: { lengths: [9], groups: [2, 7] }
};

function normalizeCountryKey(value) {
    return String(value ?? '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/^-+|-+$/g, '');
}
function findPhoneCountry(countries = [], countryKey) {
    const key = normalizeCountryKey(countryKey);
    return countries.find((country) => [country.key, country.name, country.isoCode2, country.isoCode3, country.iso2, country.iso3]
        .filter(Boolean)
        .some((value) => normalizeCountryKey(value) === key));
}
function callingCodeForCountry(countries = [], countryKey) {
    const country = findPhoneCountry(countries, countryKey);
    const code = country?.countryCodes?.[0];
    return code ? `+${code}` : null;
}
function phoneLengthsForCountry(countries = [], countryKey) {
    const country = findPhoneCountry(countries, countryKey);
    const configured = normalizeLengths(country?.phone_lengths ??
        country?.phoneLengths ??
        country?.phone_length ??
        country?.phoneLength ??
        country?.phone_max_length ??
        country?.phoneMaxLength);
    if (configured.length > 0)
        return configured;
    const metadata = phoneMetadataForCountry(country);
    return metadata?.lengths ?? [];
}
function phoneMaxLengthForCountry(countries = [], countryKey) {
    const lengths = phoneLengthsForCountry(countries, countryKey);
    const callingCode = callingCodeForCountry(countries, countryKey);
    if (lengths.length > 0)
        return Math.max(...lengths);
    if (callingCode) {
        return Math.max(1, 15 - callingCode.replace(/\D/g, '').length);
    }
    return null;
}
function localPhoneDigitsForCountry(countries = [], countryKey, value) {
    const callingCode = callingCodeForCountry(countries, countryKey);
    const callingDigits = callingCode?.replace(/\D/g, '') ?? '';
    const digits = value.replace(/\D/g, '');
    const local = callingDigits && digits.startsWith(callingDigits)
        ? digits.slice(callingDigits.length)
        : digits;
    const maxLength = phoneMaxLengthForCountry(countries, countryKey);
    return maxLength ? local.slice(0, maxLength) : local;
}
function phoneMaskForCountry(countries = [], countryKey) {
    const callingCode = callingCodeForCountry(countries, countryKey);
    const country = findPhoneCountry(countries, countryKey);
    const metadata = phoneMetadataForCountry(country);
    const iso2 = countryIso2(country);
    const maxLength = Math.max(...(metadata?.lengths ?? [10]));
    if (!callingCode)
        return '#'.repeat(maxLength);
    if ((iso2 === 'US' || iso2 === 'CA') && maxLength === 10) {
        return `${callingCode} (###) ###-####`;
    }
    if (iso2 === 'IN' && maxLength === 10) {
        return `${callingCode} ##### #####`;
    }
    return `${callingCode} ${maskGroups(metadata?.groups ?? [maxLength])}`;
}
function normalizeLengths(value) {
    const values = Array.isArray(value) ? value : [value];
    return values
        .map((length) => Number(length))
        .filter((length) => Number.isInteger(length) && length > 0);
}
function phoneMetadataForCountry(country) {
    const iso2 = countryIso2(country);
    if (!iso2)
        return null;
    return PHONE_METADATA[iso2] ?? null;
}
function maskGroups(groups) {
    return groups.map((group) => '#'.repeat(group)).join(' ');
}
function countryIso2(country) {
    const iso2 = String(country?.isoCode2 ?? country?.iso2 ?? '').toUpperCase();
    return /^[A-Z]{2}$/.test(iso2) ? iso2 : null;
}

function usePhoneNumber(options = phoneNumberData) {
    const countries = options.countries ?? phoneNumberData.countries ?? [];
    const [selectedCountryKey, setSelectedCountryKey] = useState(options.countryCode ?? 'IN');
    const [localPhone, setLocalPhone] = useState(() => localPhoneDigitsForCountry(countries, selectedCountryKey, options.phone ?? ''));
    const selectedPhoneLengths = phoneLengthsForCountry(countries, selectedCountryKey);
    const selectedCountry = findPhoneCountry(countries, selectedCountryKey);
    const callingCode = callingCodeForCountry(countries, selectedCountryKey);
    const mask = phoneMaskForCountry(countries, selectedCountryKey);
    const isValid = localPhone.length > 0 && selectedPhoneLengths.includes(localPhone.length);
    const updatePhone = (value) => {
        if (isPhoneCountry(value)) {
            updateCountry(value);
            return localPhone.length > 0 && selectedPhoneLengths.includes(localPhone.length);
        }
        const eventTarget = targetFromInput(value);
        const nextPhone = localPhoneDigitsForCountry(countries, selectedCountryKey, valueFromInput(value));
        const nextIsValid = nextPhone.length > 0 && selectedPhoneLengths.includes(nextPhone.length);
        setLocalPhone(nextPhone);
        if (eventTarget) {
            eventTarget.value = nextPhone;
        }
        return nextIsValid;
    };
    const updateCountry = (value) => {
        const nextCountryKey = valueFromInput(value);
        setSelectedCountryKey(nextCountryKey);
        setLocalPhone((currentPhone) => localPhoneDigitsForCountry(countries, nextCountryKey, currentPhone));
    };
    return {
        countryOptions: countries,
        selectedCountry,
        mask,
        callingCode,
        localPhone,
        isValid,
        handleInput: updatePhone
    };
}
function valueFromInput(value) {
    if (typeof value === 'string')
        return value;
    if (isPhoneCountry(value)) {
        return String(value.isoCode2 ?? value.iso2 ?? value.key ?? value.name);
    }
    return String(targetFromInput(value)?.value ?? '');
}
function targetFromInput(value) {
    if (typeof value === 'string' || isPhoneCountry(value))
        return null;
    const target = value.target;
    return target ?? null;
}
function isPhoneCountry(value) {
    return typeof value === 'object' && value !== null && ('key' in value || 'isoCode2' in value);
}

export { countries, dialCodes, phoneNumberData, usePhoneNumber };
//# sourceMappingURL=index.js.map
