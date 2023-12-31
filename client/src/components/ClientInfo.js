function ClientInfo({ onChange }) {
  return (
    <div className="client-info">
      <label>
        Name:
        <input
          type="text"
          onChange={(value) => onChange("name", value)}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          onChange={(value) => onChange("lastName", value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          onChange={(value) => onChange("email", value)}
          required
        />
      </label>
      <label>
        Phone:
        <input type="tel" onChange={(value) => onChange("phone", value)} />
      </label>
      <label>
        Birthday:
        <input
          type="date"
          onChange={(value) => onChange("birthday", value)}
          required
        />
      </label>
      <label>
        Country:
        <select onChange={(value) => onChange("country", value)} required>
          <option value="AF">Afghanistan</option>

          <option value="ZA">Afrique du Sud</option>

          <option value="AL">Albanie</option>

          <option value="DZ">Algérie</option>

          <option value="DE">Allemagne</option>

          <option value="AD">Andorre</option>

          <option value="AO">Angola</option>

          <option value="AI">Anguilla</option>

          <option value="AQ">Antarctique</option>

          <option value="AG">Antigua-et-Barbuda</option>

          <option value="SA">Arabie saoudite</option>

          <option value="AR">Argentine</option>

          <option value="AM">Arménie</option>

          <option value="AW">Aruba</option>

          <option value="AU">Australie</option>

          <option value="AT">Autriche</option>

          <option value="AZ">Azerbaïdjan</option>

          <option value="BS">Bahamas</option>

          <option value="BH">Bahreïn</option>

          <option value="BD">Bangladesh</option>

          <option value="BB">Barbade</option>

          <option value="BY">Bélarus</option>

          <option value="BE">Belgique</option>

          <option value="BZ">Belize</option>

          <option value="BJ">Bénin</option>

          <option value="BM">Bermudes</option>

          <option value="BT">Bhoutan</option>

          <option value="BO">Bolivie</option>

          <option value="BQ">Bonaire</option>

          <option value="BA">Bosnie-Herzégovine</option>

          <option value="BW">Botswana</option>

          <option value="BR">Brésil</option>

          <option value="BN">Brunei Darussalam</option>

          <option value="BG">Bulgarie</option>

          <option value="BF">Burkina Faso</option>

          <option value="BI">Burundi</option>

          <option value="KH">Cambodge</option>

          <option value="CM">Cameroun</option>

          <option value="CA">Canada</option>

          <option value="CV">Cap-Vert</option>

          <option value="CL">Chili</option>

          <option value="CN">Chine</option>

          <option value="CY">Chypre</option>

          <option value="CO">Colombie</option>

          <option value="KM">Comores</option>

          <option value="CG">Congo</option>

          <option value="CD">Congo - République démocratique</option>

          <option value="KP">Corée du Nord</option>

          <option value="KR">Corée du Sud</option>

          <option value="CR">Costa Rica</option>

          <option value="CI">Côte d'Ivoire</option>

          <option value="HR">Croatie</option>

          <option value="CU">Cuba</option>

          <option value="CW">Curaçao</option>

          <option value="DK">Danemark</option>

          <option value="DJ">Djibouti</option>

          <option value="DM">Dominique</option>

          <option value="EG">Égypte</option>

          <option value="SV">El Salvador</option>

          <option value="AE">Émirats arabes unis</option>

          <option value="EC">Équateur</option>

          <option value="ER">Érythrée</option>

          <option value="ES">Espagne</option>

          <option value="EE">Estonie</option>

          <option value="US">États-Unis</option>

          <option value="ET">Éthiopie</option>

          <option value="FJ">Fidji</option>

          <option value="FI">Finlande</option>

          <option value="FR">France</option>

          <option value="GA">Gabon</option>

          <option value="GM">Gambie</option>

          <option value="GE">Géorgie</option>

          <option value="GS">Géorgie du Sud et les îles Sandwich du Sud</option>

          <option value="GH">Ghana</option>

          <option value="GI">Gibraltar</option>

          <option value="GR">Grèce</option>

          <option value="GD">Grenade</option>

          <option value="GL">Groenland</option>

          <option value="GP">Guadeloupe</option>

          <option value="GU">Guam</option>

          <option value="GT">Guatemala</option>

          <option value="GG">Guernesey</option>

          <option value="GN">Guinée</option>

          <option value="GQ">Guinée équatoriale</option>

          <option value="GW">Guinée-Bissau</option>

          <option value="GY">Guyana</option>

          <option value="GF">Guyane française</option>

          <option value="HT">Haïti</option>

          <option value="HN">Honduras</option>

          <option value="HK">Hong Kong</option>

          <option value="HU">Hongrie</option>

          <option value="CX">Île Christmas</option>

          <option value="IM">Île de Man</option>

          <option value="NF">Île Norfolk</option>

          <option value="KY">Îles Caïmans</option>

          <option value="CC">Îles Cocos (Keeling)</option>

          <option value="CK">Îles Cook</option>

          <option value="AX">Îles d'Ã…land</option>

          <option value="FO">Îles Féroé</option>

          <option value="FK">Îles Malouines</option>

          <option value="MH">Îles Marshall</option>

          <option value="UM">Îles mineures éloignées des États-Unis</option>

          <option value="SB">Îles Salomon</option>

          <option value="TC">Îles Turks et Caicos</option>

          <option value="VI">Îles Vierges américaines</option>

          <option value="VG">Îles Vierges britanniques</option>

          <option value="WF">Îles Wallis-et-Futuna</option>

          <option value="IN">Inde</option>

          <option value="ID">Indonésie</option>

          <option value="IQ">Irak</option>

          <option value="IR">Iran</option>

          <option value="IE">Irlande</option>

          <option value="IS">Islande</option>

          <option value="IT">Italie</option>

          <option value="JM">Jamaïque</option>

          <option value="JP">Japon</option>

          <option value="JE">Jersey</option>

          <option value="JO">Jordanie</option>

          <option value="KZ">Kazakhstan</option>

          <option value="KE">Kenya</option>

          <option value="KG">Kirghizistan</option>

          <option value="KI">Kiribati</option>

          <option value="KW">Koweït</option>

          <option value="LA">Laos</option>

          <option value="LS">Lesotho</option>

          <option value="LV">Lettonie</option>

          <option value="LB">Liban</option>

          <option value="LR">Libéria</option>

          <option value="LY">Libye</option>

          <option value="LI">Liechtenstein</option>

          <option value="LT">Lituanie</option>

          <option value="LU">Luxembourg</option>

          <option value="MO">Macao</option>

          <option value="MK">Macédoine</option>

          <option value="MG">Madagascar</option>

          <option value="MY">Malaisie</option>

          <option value="MW">Malawi</option>

          <option value="MV">Maldives</option>

          <option value="ML">Mali</option>

          <option value="MT">Malte</option>

          <option value="MP">Mariannes du Nord</option>

          <option value="MA">Maroc</option>

          <option value="MQ">Martinique</option>

          <option value="MU">Maurice</option>

          <option value="MR">Mauritanie</option>

          <option value="YT">Mayotte</option>

          <option value="MX">Mexique</option>

          <option value="FM"> États fédérés de</option>

          <option value="MD">Moldavie</option>

          <option value="MC">Monaco</option>

          <option value="MN">Mongolie</option>

          <option value="ME">Monténégro</option>

          <option value="MS">Montserrat</option>

          <option value="MZ">Mozambique</option>

          <option value="MM">Myanmar</option>

          <option value="NA">Namibie</option>

          <option value="NR">Nauru</option>

          <option value="NP">Népal</option>

          <option value="NI">Nicaragua</option>

          <option value="NE">Niger</option>

          <option value="NG">Nigeria</option>

          <option value="NU">Niue</option>

          <option value="NO">Norvège</option>

          <option value="NC">Nouvelle-Calédonie</option>

          <option value="NZ">Nouvelle-Zélande</option>

          <option value="OM">Oman</option>

          <option value="UG">Ouganda</option>

          <option value="UZ">Ouzbékistan</option>

          <option value="PK">Pakistan</option>

          <option value="PW">Palau</option>

          <option value="PS">Palestine</option>

          <option value="PA">Panama</option>

          <option value="PG">Papouasie-Nouvelle-Guinée</option>

          <option value="PY">Paraguay</option>

          <option value="NL">Pays-Bas</option>

          <option value="PE">Pérou</option>

          <option value="PH">Philippines</option>

          <option value="PN">Pitcairn</option>

          <option value="PL">Pologne</option>

          <option value="PF">Polynésie française</option>

          <option value="PT">Portugal</option>

          <option value="PR">Puerto Rico</option>

          <option value="QA">Qatar</option>

          <option value="CF">République centrafricaine</option>

          <option value="DO">République dominicaine</option>

          <option value="CZ">République tchèque</option>

          <option value="RE">Réunion</option>

          <option value="RO">Roumanie</option>

          <option value="GB">Royaume-Uni</option>

          <option value="RU">Russie</option>

          <option value="RW">Rwanda</option>

          <option value="EH">Sahara Occidental</option>

          <option value="BL">Saint-Barthélemy</option>

          <option value="KN">Saint-Kitts-et-Nevis</option>

          <option value="SM">Saint-Marin</option>

          <option value="SX">Saint-Martin</option>

          <option value="MF">Saint-Martin (France)</option>

          <option value="PM">Saint-Pierre-et-Miquelon</option>

          <option value="VC">Saint-Vincent-et-les-Grenadines</option>

          <option value="SH">Sainte-Hélène</option>

          <option value="LC">Sainte-Lucie</option>

          <option value="WS">Samoa</option>

          <option value="AS">Samoa américaine</option>

          <option value="ST">Sao Tomé-et-Principe</option>

          <option value="SN">Sénégal</option>

          <option value="RS">Serbie</option>

          <option value="SC">Seychelles</option>

          <option value="SL">Sierra Leone</option>

          <option value="SG">Singapour</option>

          <option value="SK">Slovaquie</option>

          <option value="SI">Slovénie</option>

          <option value="SO">Somalie</option>

          <option value="SD">Soudan</option>

          <option value="SS">Soudan du Sud</option>

          <option value="LK">Sri Lanka</option>

          <option value="SE">Suède</option>

          <option value="CH">Suisse</option>

          <option value="SR">Suriname</option>

          <option value="SJ">Svalbard et île de Jan Mayen</option>

          <option value="SZ">Swaziland</option>

          <option value="SY">Syrie</option>

          <option value="TJ">Tadjikistan</option>

          <option value="TW">Taïwan</option>

          <option value="TZ">Tanzanie</option>

          <option value="TD">Tchad</option>

          <option value="TF">Terres australes françaises</option>

          <option value="IO">Territoire britannique de l'océan Indien</option>

          <option value="TH">Thaïlande</option>

          <option value="TL">Timor-Leste</option>

          <option value="TG">Togo</option>

          <option value="TK">Tokelau</option>

          <option value="TO">Tonga</option>

          <option value="TT">Trinité-et-Tobago</option>

          <option value="TN">Tunisie</option>

          <option value="TM">Turkménistan</option>

          <option value="TR">Turquie</option>

          <option value="TV">Tuvalu</option>

          <option value="UA">Ukraine</option>

          <option value="UY">Uruguay</option>

          <option value="VU">Vanuatu</option>

          <option value="VA">Vatican</option>

          <option value="VE">Venezuela</option>

          <option value="VN">Vietnam</option>

          <option value="YE">Yémen</option>

          <option value="ZM">Zambie</option>

          <option value="ZW">Zimbabwe</option>
          {/* Add country options here */}
        </select>
      </label>
      <label>
        Additional Options:
        <textarea onChange={(value) => onChange("additionalOptions", value)} />
      </label>
    </div>
  );
}

export default ClientInfo;
