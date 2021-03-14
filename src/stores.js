import { writable } from 'svelte/store';

export const ValidPages = writable({
  isValidPage1: false,
  isValidPage2: false,
  isValidPage3: false,
  isValidPage4: false,
})

export const Paraiska = writable({
  paslauga: 'PILNAS_SPEKTRAS',
  reikalingas_kodu_skaicius: '',
  apyvarta: '',
  pareiskejo_tipas: 'IMONE',
  imones_tipas: '',
  pavadinimas: '',
  asmens_vardas: '',
  asmens_pavarde: '',
  asmens_kodas: '',
  veiklos_sritys: [],
  kitos_veiklos_sritys: '',
  is_med_prekes: '',
  is_med_prekes_jav: '',
  imones_kodas: '',
  pvm_kodas: '',
  telefonas: '',
  email: '',
  www: '',
  banko_saskaita: '',
  banko_kodas: '',
  bankas: '',
  email_saskaitoms: '',

  adresas_reg: {
    valstybe: 'LT',
    adresas1: '',
    adresas2: '',
    adresas3: '',
    adresas4: '',
    miestas: null,
    pasto_kodas: '',
  },
  is_adresas_vienas: true,
  adresas_kor: {
    valstybe: 'LT',
    adresas1: '',
    adresas2: '',
    adresas3: '',
    adresas4: '',
    miestas: null,
    pasto_kodas: '',
  },

  vadovas: {
    vardas: '',
    pavarde: '',
    pareigos: '',
    telefonas: '',
    email: '',
  },
  is_vadovas_atsakingas: false,
  atsakingas_asmuo: {
    vardas: '',
    pavarde: '',
    pareigos: '',
    telefonas: '',
    email: '',
  },

  is_patvirtinta: false,
});

export const ParaiskaErrors = writable({
  paslauga: '',
  reikalingas_kodu_skaicius: '',
  apyvarta: '',
  pareiskejo_tipas: '',
  imones_tipas: '',
  pavadinimas: '',
  asmens_vardas: '',
  asmens_pavarde: '',
  asmens_kodas: '',
  veiklos_sritys: '',
  kitos_veiklos_sritys: '',
  is_med_prekes: '',
  is_med_prekes_jav: '',
  imones_kodas: '',
  pvm_kodas: '',
  telefonas: '',
  email: '',
  www: '',
  banko_saskaita: '',
  banko_kodas: '',
  bankas: '',
  email_saskaitoms: '',

  adresas_reg: {
    valstybe: '',
    adresas1: '',
    adresas2: '',
    adresas3: '',
    adresas4: '',
    miestas: '',
    pasto_kodas: '',
  },
  is_adresas_vienas: false,
  adresas_kor: {
    valstybe: '',
    adresas1: '',
    adresas2: '',
    adresas3: '',
    adresas4: '',
    miestas: '',
    pasto_kodas: '',
  },

  vadovas: {
    vardas: '',
    pavarde: '',
    pareigos: '',
    telefonas: '',
    email: '',
  },
  atsakingas_asmuo: {
    vardas: '',
    pavarde: '',
    pareigos: '',
    telefonas: '',
    email: '',
  },

});

const ParaiskaDTO = {
  _entityName: "gs1nz_NaudotojoParaiska",
  paslauga: "PILNAS_SPEKTRAS",
    apyvarta: {
        _entityName: "gs1nz_Apyvarta",
        id: ""
    },
    reikalingasKoduSkaicius: "",
    asmuoImone: "IMONE",
    imonesTipas: {
        _entityName: "gs1nz_ImonesTipas",
        id: ""
    },
    imonesPavadinimas: "",
    asmensVardas: "",
    asmensPavarde: "",
    asmensKodas: "",
    veiklosSritys: [],
    kitosVeiklosSritys: "",
    isMedPrekes: false,
    imonesKodas: "",
    pvmKodas: "",
    telefonas: "",
    email: "",
    www: "",
    bankoSaskaita: "",
    bankoKodas: "",
    bankas: "",
    emailSaskaitoms: "",
    adresai: [],
    isAdresasVienas: false,
    atsakingiAsmenys: [],
        
};

const shortEntityDTO = {
  _entityName: '',
  id: ''
}

const AdresasDTO = {
  _entityName: 'gs1nz_Adresas',
  adresoTipas: '',
  valstybe: {
    _entityName: 'gs1nz_Iso3166',
    id: '',
  },
  line1: '',
  line2: '',
  line3: '',
  line4: '',
  miestas: {
    _entityName: 'gs1nz_VakMiestas',
    id: '',
  },
};

const AsmuoDTO = {
  _entityName: 'gs1nz_AtsakingasAsmuo',
  isVadovas: false,
  vardas: '',
  pavarde: '',
  pareigos: '',
  telefonas: '',
  email: '',
};

function fillDto(paraiska) {
  ParaiskaDTO.paslauga = paraiska.paslauga;
  ParaiskaDTO.reikalingasKoduSkaicius = paraiska.reikalingas_kodu_skaicius;
  if (paraiska.paslauga === 'PILNAS_SPEKTRAS') {
    ParaiskaDTO.apyvarta.id = paraiska.apyvarta;
  }
  ParaiskaDTO.asmuoImone = paraiska.pareiskejo_tipas;
  if (paraiska.pareiskejo_tipas === 'IMONE') {
    ParaiskaDTO.imonesTipas.id = paraiska.imones_tipas;
    ParaiskaDTO.imonesPavadinimas = paraiska.pavadinimas;
    ParaiskaDTO.imonesKodas = paraiska.imones_kodas;
  } else {
    ParaiskaDTO.asmensVardas = paraiska.asmens_vardas;
    ParaiskaDTO.asmensPavarde = paraiska.asmens_pavarde;
    ParaiskaDTO.asmensKodas = paraiska.asmens_kodas;
  }
  ParaiskaDTO.veiklosSritys = paraiska.veiklos_sritys.toString();
  if (paraiska.veiklos_sritys.includes('999')) {
    ParaiskaDTO.kitosVeiklosSritys = paraiska.kitos_veiklos_sritys;
  }
  ParaiskaDTO.isMedPrekes = paraiska.is_med_prekes;
  ParaiskaDTO.pvmKodas = paraiska.pvm_kodas;
  ParaiskaDTO.telefonas = paraiska.telefonas;
  ParaiskaDTO.email = paraiska.email;
  ParaiskaDTO.www = paraiska.www;
  ParaiskaDTO.bankoSaskaita = paraiska.banko_saskaita;
  ParaiskaDTO.bankoKodas = paraiska.banko_kodas;
  ParaiskaDTO.bankas = paraiska.bankas;
  ParaiskaDTO.emailSaskaitoms = paraiska.email_saskaitoms;
  // adresai
  const adresasReg = Object.create(AdresasDTO);
  adresasReg.adresoTipas = 'REGISTRACIJOS';
  adresasReg.valstybe = Object.create(shortEntityDTO);
  adresasReg.valstybe._entityName = "gs1nz_Iso3166";
  adresasReg.valstybe.id = paraiska.adresas_reg.valstybe;
  adresasReg.line1 = paraiska.adresas_reg.adresas1;
  adresasReg.line2 = paraiska.adresas_reg.adresas2;
  adresasReg.line3 = paraiska.adresas_reg.adresas3;
  adresasReg.line4 = paraiska.adresas_reg.adresas4;

  if (paraiska.adresas_reg.valstybe === 'LT') {
    adresasReg.miestas = Object.create(shortEntityDTO);
    adresasReg.miestas._entityName = "gs1nz_VakMiestas";
    adresasReg.miestas.id = paraiska.adresas_reg.miestas;
    adresasReg.pasto_kodas = 'LT-' + paraiska.adresas_reg.pasto_kodas;
  } else {
    adresasReg.miestas = null;
    adresasReg.pasto_kodas = paraiska.adresas_reg.pasto_kodas;
  }
  ParaiskaDTO.adresai = [];
  ParaiskaDTO.adresai.push(adresasReg);

  ParaiskaDTO.isAdresasVienas = paraiska.is_adresas_vienas;
  if (!paraiska.is_adresas_vienas) {
    const adresasKor = Object.create(AdresasDTO);
    adresasKor.adresoTipas = 'KORESPONDENCIJAI';
    adresasKor.valstybe = Object.create(shortEntityDTO);
    adresasKor.valstybe._entityName = "gs1nz_Iso3166";
    adresasKor.valstybe.id = paraiska.adresas_kor.valstybe;
    adresasKor.line1 = paraiska.adresas_kor.adresas1;
    adresasKor.line2 = paraiska.adresas_kor.adresas2;
    adresasKor.line3 = paraiska.adresas_kor.adresas3;
    adresasKor.line4 = paraiska.adresas_kor.adresas4;

    if (paraiska.adresas_kor.valstybe === 'LT') {
      adresasKor.miestas = Object.create(shortEntityDTO);
      adresasKor.miestas._entityName = "gs1nz_VakMiestas";
      adresasKor.miestas.id = paraiska.adresas_kor.miestas;
      adresasKor.pasto_kodas = 'LT-' + paraiska.adresas_kor.pasto_kodas;
    } else {
      adresasKor.miestas = null;
      adresasKor.pasto_kodas = paraiska.adresas_kor.pasto_kodas;
    }
    ParaiskaDTO.adresai = [];
    ParaiskaDTO.adresai.push(adresasKor);
  }

  // asmenys
  if (paraiska.pareiskejo_tipas === 'IMONE') {
    // vadovas
    const vadovas = Object.create(AsmuoDTO);
    vadovas.isVadovas = true;
    vadovas.vardas = paraiska.vadovas.vardas;
    vadovas.pavarde = paraiska.vadovas.pavarde;
    vadovas.pareigos = paraiska.vadovas.pareigos;
    vadovas.telefonas = paraiska.vadovas.telefonas;
    vadovas.email = paraiska.vadovas.email;

    // atsakingas asmuo
    if (paraiska.atsakingas_asmuo.pavarde.length > 0) {
      const atsakingas = Object.create(AsmuoDTO);
      atsakingas.isVadovas = false;
      atsakingas.vardas = paraiska.atsakingas_asmuo.vardas;
      atsakingas.pavarde = paraiska.atsakingas_asmuo.pavarde;
      atsakingas.pareigos = paraiska.atsakingas_asmuo.pareigos;
      atsakingas.telefonas = paraiska.atsakingas_asmuo.telefonas;
      atsakingas.email = paraiska.atsakingas_asmuo.email;
    }
  }
}

export function persistParaiska(paraiska, errLst) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  fillDto(paraiska);
  const raw = JSON.stringify(ParaiskaDTO);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'http://localhost:8080/gs1nzx/rest/v2/entities/gs1nz_NaudotojoParaiska',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result)
      return true
    })
    .catch((error) => {
      console.log('error', error);
      errLst.errors.push(error);
      return false
    });
}

// export Paraiska
// export fillDto
