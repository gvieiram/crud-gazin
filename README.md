<div style="text-align: center;">
  <h1 style="line-height: 0">
    CRUD - Gazin
  </h1>
  </br>
  <img src="./docs/crud-gazin.gif" height="800" />

</div>

***
</br>

* [Como instalar](#construction_worker-como-instalar)
* [Abrindo o emulador](#iphone-abrindo-o-emulador)

</br>

## :construction_worker: Como instalar

###### Clone o Repositório

```bash
cd suaPasta

git clone https://github.com/gvieiram/crud-gazin.git
```


###### :gear:  Instalando Yarn e Expo

- Você precisará ter o [NodeJs](https://nodejs.org/en/) já instalado em seu computador

```bash
npm install --global yarn
```

Após a instalação, verifique se ela foi realizada com sucesso com o comando:

```bash
yarn -v
```

Para que as instalações globais do Yarn funcionem, vamos ter que fazer mais um passo. Execute o comando:

```bash
yarn global bin
```

**Anote o caminho retornado** e o insira nas configurações das variáveis ambiente do seu sistema operacional.

Após a configuração da variável de ambiente, instale o Expo

```bash
yarn global add expo-cli
```

</br>

###### Configurando a API

Instale as dependências do projeto
```bash
cd suaPasta/crud-gazin

yarn
```

Dentro do projeto vá ate `src`>`services`>`api.ts` e na linha 3, altere de `const ip = '192.168.1.11'` com o seu ip.

Agora na raiz do projeto terá um arquivo chamado de `package.json`, na linha 8 troque o ip `192.168.1.11` pelo seu

Não sabe qual o seu IP? [Veja com descobrir aqui](docs/findIP.md)

Agora que você já configurou a API com seu IP, basta executa-lá:

```bash
yarn api
```

Pronto agora você já pode rodar o projeto :tada:

###### 💻 Rode o Projeto

```bash
expo start
```

### :iphone: Abrindo o emulador


###### Com emulador Android

> Caso você não tenha um emulador do Android Studio instalado em sua máquina recomendo pular para a utilização em seu celular ([próxima etapa](#com-seu-próprio-celular))

Abra seu emulador e deixe-o rodando normalmente

Vá para a janela no navegador que abriu quando você rodou o comando `expo start`, e clique em `Run on Android device/emulator`

![image](https://user-images.githubusercontent.com/52188377/139442399-e372c51e-bc0b-4c90-ab57-bf7fc138ebcc.png)

</br>

###### Com seu próprio celular

- Para emular o app faça o download do [Expo Go](https://expo.dev/client) em seu dispositivo móvel

> Certifique-se que o Expo Go esteja na mesma rede que o projeto está rodando.

- Com o Expo Go, leia o QRCode
