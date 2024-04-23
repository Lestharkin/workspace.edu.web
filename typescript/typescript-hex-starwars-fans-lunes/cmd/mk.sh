cmd=$1
app=$2

handleCommandError() {
  command=$1
  if [ -z $command ]; then
    echo "Usage: mk <module> <app>"
    echo "Usage: mk <usecase|service|adapter> <app>  <-r|-n>  <usecase|service|adapter>"
    exit 1
  fi
}

handleDirectoryError() {
  directory=$1
  if ! [[ -d $directory ]]; then
    echo  "Directory not found"
    echo  "Please create the module first"
    exit 1
  fi
}

makeModule() {
  src=${1}
  app=${2}
  if ! [[ -d $src ]]; then
    mkdir $src
  fi
  mkdir ${src}/${app} ${src}/${app}/shared ${src}/${app}/helper ${src}/${app}/util
  mkdir ${src}/${app}/application ${src}/${app}/application/service ${src}/${app}/application/usecase
  mkdir ${src}/${app}/domain ${src}/${app}/domain/model ${src}/${app}/domain/port ${src}/${app}/domain/port/driver ${src}/${app}/domain/port/driven
  mkdir ${src}/${app}/infrastructure ${src}/${app}/infrastructure/config

  touch ${src}/${app}/shared/.gitkeep 
  touch ${src}/${app}/helper/.gitkeep
  touch ${src}/${app}/util/.gitkeep
  touch ${src}/${app}/application/service/.gitkeep
  touch ${src}/${app}/application/usecase/.gitkeep
  touch ${src}/${app}/domain/model/.gitkeep
  touch ${src}/${app}/domain/port/driver/.gitkeep
  touch ${src}/${app}/domain/port/driven/.gitkeep
  touch ${src}/${app}/infrastructure/config/config.ts
}

makeComponent() {
  cmd=${1}
  app=${2}
  usecase=${3}
  service=${4}
  portPath=${5}
  src=${6}
  UseCase="${usecase^}${service}"  
  echo "
import ${UseCase}Port from '$portPath${type}/${usecase}/${UseCase}Port'

export default class ${UseCase} implements ${UseCase}Port {
  name: string

  constructor() {
    this.name = '${UseCase}'
  }

  public execute = async (): Promise<string> => {
    return 'Hello from ${UseCase}'
  }
}
  " > $useCaseDir/${UseCase}.ts
  echo "
export default interface ${UseCase}Port {
  execute(): Promise<string>
}
  " > $useCasePortDir/${UseCase}Port.ts
}

handleCommandError $cmd
handleCommandError $app

dir=$(pwd)
src=${dir}"/src"
test=${dir}"/test"

if [ $cmd == "module" ]
then
  makeModule $src $app
  makeModule $test $app
  echo "Module created"
  exit 1
fi

handleDirectoryError ${src}/${app}

portType=$3
usecase=$4

handleCommandError $portType
handleCommandError $usecase

if [ $cmd == "usecase" ] || [ $cmd == "u" ]
then
  service="UseCase"
  layer="application"
  dirType="usecase/"
fi

if [ $cmd == "service" ] || [ $cmd == "s" ]
then
  service="Service"
  layer="application"
  dirType="service/"
fi

if [ $cmd == "adapter" ] || [ $cmd == "a" ]
then
  service="Adapter"
  layer="infrastructure"
  dirType="adapter/"
fi

if [ $cmd == "repository" ] || [ $cmd == "r" ]
then
  service="Repository"
  layer="infrastructure"
  dirType="repository/"
fi

portPath=../../../domain/port/
baseDir=${src}/${app}/${layer}/${dirType}
if ! [[ -d $baseDir ]]; then
  mkdir $baseDir
fi
useCaseDir=${baseDir}${usecase}
if ! [[ -d $usecaseDir ]]; then
  mkdir $useCaseDir
fi
if [ $portType == "-r" ]; then
  type="driver"
else
  type="driven"
fi
useCasePortDir=${src}/${app}/domain/port/${type}/${usecase}
if ! [[ -d $useCasePortDir ]]; then
  mkdir $useCasePortDir
fi


makeComponent $cmd $app $usecase $service $portPath $src
echo "${service} created :)"
