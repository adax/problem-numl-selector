<script>
  import {Paraiska} from '../stores';

  import Adress from './Address.svelte'
</script>

<nu-grid
  id="Tab3"
  padding="24px 95px"
  gap="30px"
  columns="repeat(auto-fit,444px)"
>
  <nu-block id="paneAdresasReg" border="#C4D7ED" width="445px">
    <nu-flow id="form" padding="48px 49px 18px" gap="24px">
      <nu-block color="#F26334" size="32px"
        >Adr 1</nu-block
      >
      <Adress adresas={$Paraiska.adresas_reg} isDisabled={false}></Adress>

      <nu-flex gap="1x" items="center">
        <nu-checkbox labelledby="label" 
        checked={$Paraiska.is_adresas_vienas} 
        on:input={(event) => $Paraiska.is_adresas_vienas = event.detail} />
        <nu-label>Check 1</nu-label>
      </nu-flex>
      
    </nu-flow>
  </nu-block>
  <nu-block id="paneAdresasKor" border="#C4D7ED" width="445px">
    <nu-flow id="form" padding="48px 49px 18px" gap="24px">
      <nu-block color="#F26334" size="32px"
        >Adr 2</nu-block
      >
      <Adress adresas={$Paraiska.adresas_kor} isDisabled={$Paraiska.is_adresas_vienas}></Adress>
    </nu-flow>
  </nu-block>
</nu-grid>
