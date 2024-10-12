# Roteiro de exercícios sobre Gerência de configuração, disciplina Engenharia de Software e Sistemas

## Paulo Borba

## Centro de Informática

## Universidade Federal de Pernambuco

Adicione as respostas imediatamente após as perguntas, usando uma outra cor. Leia com calma as instruções, e reflita com cautela sobre as consequências de cada comando.

## Aula 1

1. O sistema de gerenciamento de metas (SGM) está armazenado no GitHub. Segundo as recomendações dos responsáveis pelo projeto, para colaborar com o projeto precisamos primeiro criar um *fork* do mesmo, isto é, uma cópia pública do projeto, armazenada no próprio GitHub.    
   1. Se você não tem, crie uma conta no GitHub ([https://github.com](https://github.com/pauloborba/teachingassistant))  
   2. Vá no site do projeto ([https://github.com/pauloborba/teachingassistant](https://github.com/pauloborba/teachingassistant)) e solicite a criação de um *fork* (ver opção no canto direito superior da página que está no endereço acima)  
   3. Confirme a criação e endereço do *fork*, a cópia criada do repositório. Cole abaixo o endereço.  
   4. Compare o conteúdo do *fork* com o conteúdo do projeto original. Eles têm o mesmo conteúdo?  
   5. Os responsáveis pelo projeto não permitem que você envie contribuições diretamente para o repositório principal; você terá primeiro que enviar contribuições para o *fork* e depois solicitar que as mesmas sejam analisadas e integradas ao repositório principal. Outros projetos podem ter formas diferentes de colaboração; com o SGM, temos que seguir esse procedimento.   
2. Para começar a efetivamente contribuir com o SGM, precisamos copiar o conteúdo do *fork*, que está nos servidores do GitHub, para a máquina na qual vamos trabalhar. Para isso, precisamos criar um *clone* do *fork*.   
   1. Na linha de comandos da sua máquina (se você não é familiar com *shells*, recomendo fortemente que estude agora; este [tutorial](https://github.com/chrisparnin/EngineeringBasics/blob/master/Shells.md\#shells) traz um bom resumo), no diretório onde você deseja que o projeto seja armazenado, digite 

      **git clone \<URL\_DO\_SEU\_FORK\>**

   2. Observe uma mensagem como a abaixo ![image](https://github.com/user-attachments/assets/07837adb-fed4-4112-b8ce-376f6d695957)

   3. Liste e inspecione o conteúdo do diretório, comparando com o conteúdo do projeto original. Temos agora o mesmo conteúdo tanto no repositório principal quanto no *fork* do GitHub e no *clone* da sua máquina?  
   4. Analise a documentação do git ([livro](https://github.com/progit/progit2/releases/download/2.1.161/progit.pdf), [manual de referência](https://git-scm.com/docs)) e descubra o propósito do comando **git init**. Qual a diferença dele em relação ao **git clone**? Em que situações você usaria o **git init?**  
3. Agora podemos efetivamente contribuir com o projeto, começando pelos requisitos.   
   1. Dentro do diretório **teachingassistant**, crie o diretório **features**  
   2. Nesse diretório criado, crie o arquivo **AutoAvaliacao.feature** e digite nele a feature que você especificou no roteiro de requisitos  
   3. Para que o git passe a gerenciar o histórico de mudanças nos arquivos desse novo diretório, digite

      **git add features**

   4. Para registrar essa mudança, criaremos a primeira versão desse arquivo digitando

      **git commit \-m "criação da feature de auto avaliação"** 

      Isso cria, e armazena no histórico do projeto, um *commit*, ou seja um conjunto de versões dos arquivos modificados (nesse caso, só o arquivo .feature criado mais acima). Caso mais adiante seja feita uma mudança indesejada a um arquivo, teremos disponível a versão desse commit como referência. Qual a mensagem retornada pela execução desse comando? Qual a diferença entre os comandos **add** e **commit**?

   5. Note que o argumento usado acima serve para registrar a mensagem do commit, que deve retratar claramente, de forma precisa e resumida, a mudança feita.   
      1. Observe no seu *fork* as outras mensagens de *commit*, que podem servir de exemplo para as suas mensagens. Cole abaixo uma mensagem nesse *fork* que você considera adequada, e outra que considera inadequada.  
      2. Veja também o histórico de *commits* na sua máquina digitando   
         **git log \--graph \--branches**

         Observe informações como o identificador do commit, autor e data de criação. Os autores dos *commits* são os mesmos? Por que? No manual do git, veja as opções de linha de comando e explique qual o comportamento do comando **log** caso as opções acima não tivessem sido usadas. Indique uma opção da lista que você ache que poderia ser útil para você.

4. Digite agora, no arquivo **AutoAvaliacao.feature**, os cenários de preenchimento bem sucedido da auto-avaliação.  
   1. Verifique a situação do seu repositório local, em termos de arquivos modificados, diferença em relação ao seu *fork* (origin/master), etc. digitando o comando abaixo. Cole em seguida uma imagem com o resultado e explique-o.

			**git status**

2. Verifique quais as mudanças feitas em seu diretório de trabalho, em relação ao último commit, digitando

   		**git diff**

   Como esse comando indica as adições de linhas? Modifique uma das linhas do arquivo **AutoAvaliacao.feature**. Execute novamente o comando **diff**. Como a mudança é indicada pelo mesmo?

   3. Analise a documentação do git e indique abaixo como o comando **diff** pode ser usado para comparar o conteúdo de dois *commits* anteriores ao atual.   
   4. Registre a última mudança feita criando uma nova versão dos arquivos modificados:  
      	**git commit \-a \-m "criação dos cenários de preenchimento bem sucedido da auto-avaliação"**

      Veja na documentação do git que o "-a" adiciona todos os arquivos modificados e previamente adicionados (via comando **add**), não precisando chamar o comando **add** repetidamente. 

   5. Modifique uma das linhas do arquivo **AutoAvaliacao.feature** e dê *commit,* com nova mensagem e agora sem o "-a". A sua modificação foi armazenada pelo *commit*? Por que?  
5. Repita passos similares ao do item anterior para registrar os cenários de preenchimento mal sucedido da auto-avaliação. É melhor ter *commits* separados para contribuições que têm propósitos diferentes. Assim podemos ter *commits* frequentes, cada *commit* com pequenas contribuições, com foco bem definido, claramente refletidas pela mensagem do *commit*.   
   1. Veja agora como está o histórico de *commits* na sua máquina. Cole abaixo a imagem.  
   2. Analisando o histórico, reflita sobre quais as vantagens da abordagem (de pequenos e frequentes *commits*) discutida acima? Quais as desvantagens?  
6. Assumindo que essa parte da *feature* foi concluída, ou precisa ser revisada ou analisada por outras pessoas (*stakeholders*, outros membros da equipe, etc.), temos que enviar para o seu *fork* as modificações feitas até o momento.   
   1. Como você tem autorização de escrita no seu *fork* (origin), digite o comando a seguir. Consulte a documentação do git para indicar o significado de cada uma das partes do comando abaixo.  
      **git push origin master**

   2. No site do seu *fork*, verifique agora o histórico de *commits*. Ele contém o mesmo histórico do repositório da sua máquina? O conteúdo dos arquivos é o mesmo no fork e no repositório local?    
   3. Clique em dois commits quaisquer do histórico do seu *fork*. Considerando que a abordagem de *commits* pequenos e frequentes não tivesse sido seguida, qual a dificuldade que você imagina que teria para revisar um *commit* grande, sem um foco claro, e com uma mensagem pouco representativa? 

## Aula 2

7. Agora vamos trabalhar em uma parte experimental da *feature* de auto avaliação, a visualização de auto-avaliações discrepantes. Ainda não é certo que essa parte será integrada à próxima versão do produto que será entregue ao cliente. Assim é melhor começar a trabalhar nela em uma linha de desenvolvimento alternativa e independente, um *branch*, para evitar impacto na linha principal (*branch* **master**) de desenvolvimento.  
   1. Crie um *branch* chamado **discrepantes** digitando  
      **git branch discrepantes**

   2. Visualize os *branches* existentes digitando  
      **git branch**

   3. Note o asterisco ao lado de **master**, o que indica que ele é o *branch* atual. Qualquer *commit* criado será adicionado a esse *branch*. Como queremos trabalhar no novo *branch*, temos que torná-lo o *branch* atual digitando  
      	**git checkout discrepantes**

   4. Adicione ao arquivo **AutoAvaliacao.feature** um cenário de quando não há discrepância, e registre a mudança criando um *commit*.   
   5. Enquanto você estava trabalhando no novo cenário, os *stakeholders* analisaram os cenários que você tinha publicado no seu *fork*, e notaram que o cenário de falha (assumindo que esse é o último cenário do arquivo) precisa de um passo adicional nos resultados esperados (*Then*).   
      1. Mude para o *branch* principal, adicione o passo solicitado **no final do cenário** (atenção às localizações exatas das mudanças  explicitadas nesta questão, já que isso pode fazer diferença no resultado), registre a mudança, e a envie para o seu *fork*.  
      2. O que teria acontecido se você estivesse trabalhando no novo cenário diretamente no *branch* **master** ao invés de em **discrepantes?** O arquivo atualizado e enviado para o usuário conteria algo que não deveria conter? O que? Por que?  
      3. Visualize o histórico de mudanças. Mude para o *branch* **discrepantes** e visualize o histórico de mudanças. Há diferenças entre os dois históricos de mudanças? Quais? Por que?  
   6. Adicione **no final do arquivo** **AutoAvaliacao.feature** um cenário de quando há discrepância, e registre a mudança criando um *commit*.   
   7. Tendo finalizado com sucesso essa nova parte da *feature* de auto-avaliação, e os *stakeholders* tendo optado pela sua incorporação à próxima versão do produto, integre as modificações do *branch* **discrepantes** ao *branch* **master**. Digite  
      **git checkout master**

      **git merge discrepantes**

   8. Você deve ter recebido uma mensagem de falha da integração, algo como![][image2]

   	O que você acha que aconteceu? Por que? 

   9. Abra o arquivo **AutoAvaliacao.feature.** O que há de diferente nele em relação a uma arquivo de *features* típico? Qual o conteúdo final que você esperaria para esse arquivo?

   10. Altere o arquivo para que ele contenha o conteúdo final que você esperaria, e registre a mudança criando um novo *commit*.

   11. Visualize agora o histórico de mudanças. Qual a diferença para o histórico anterior? Note que asteriscos representam *commits* de merge ou não. As barras representam o que?  
   12. Envie as mudanças para o seu *fork*, e no site do *fork* analise o histórico de *commits* e *branches*.  
8. Tendo chegada agora uma solicitação de mudança mais significativa no cenário de visualização em que há discrepância, é interessante criar um *branch* específico para corrigir este erro. Assim, crie o *branch* **fixDiscrepancia**, ajuste o cenário (adicionando duas linhas quaisquer), envie para revisão no seu *fork* (veja o comando do item d abaixo)*,* e assumindo que os *stakeholders* estão agora satisfeitos, integre a correção do erro ao *branch* principal.   
   1. A integração foi feita com sucesso, sem conflito? Por que?  
   2. Envie as mudanças para o seu *fork*   
   3. Visualize as mudanças localmente e no GitHub. A história está registrada de acordo com o que você esperava?  
   4. Para que o *branch* **discrepantes** também seja visualizado no seu *fork*, digite  
       **git push origin discrepantes**

      Analise agora o conteúdo do seu *fork* no GitHub. Qual a diferença em relação ao que você conseguia ver antes no GitHub? Há novos *commits*? Por que? Há novos *branches*?

   5. Se você não tivesse criado um *branch* para corrigir o erro, e, após ter feito progresso e realizado alguns *commits*, não tivesse conseguido finalizar a correção do erro a tempo para o lançamento da nova versão do produto, o que aconteceria?  
9. Para solicitar que as mudanças enviadas no seu *fork* sejam incorporadas ao repositório principal, siga as seguintes recomendações:  
   1. Verifique o *status* do seu repositório local  
   2. Se houver mudanças no repositório principal, incorpore-as ao seu repositório local digitando  
      **git pull** 

      Que comando você usaria para baixar mudanças do repositório de um colega, ao invés do repositório principal? Se você precisar baixar atualizações do seu colega com frequência, é interessante definir o repositório dele como um *remote*; que comando do git você usaria para fazer isso? Indique qual a diferença entre o comando **pull** e o **fetch**? Em que situação você usaria o segundo?

   3. Após integrar as mudanças do repositório principal, e verificar que está tudo OK, solicite no site do seu *fork* no GitHub a criação de um *pull request* (opção *New Pull Request*).   
10. Ao invés de **git add features**, você poderia ter trocado o nome *features* por um ponto, que representa o diretório corrente. Em que situações os dois comandos teriam o mesmo efeito? Em que situações eles teriam efeito diferentes?    
11. É interessante que todos os arquivos do projeto sejam mantidos sob controle de versão? Por que? Para que serve o arquivo **.gitignore**? Dê um exemplo de uma linha que você acha que seria importante adicionar a esse arquivo.  
12. Opcionalmente, para identificar quando, e por quem, foi feita cada mudança no arquivo **AutoAvaliacao.feature**, digite   
    **git blame AutoAvaliacao.feature**

    Analise a saída gerada e indique o que representam as várias informações que aparecem em uma linha qualquer da saída.

13. Opcionalmente, todos esses comandos do git têm várias opções de comportamento que podem ser passadas como parâmetros para que o comando funcione de forma diferente. Verifique quais são as opções do **git blame** digitando 

    **git blame \-h**

    Qual o comportamento obtido com as opções **\-L** e **\--line-porcelain**?	

## Aula 3 

14. Ao invés de ter usado **git merge discrepantes** no Item 7**,** para incorporar as modificações de **discrepantes** ao **master**, alguns projetos exigem antes uma reorganização da história do projeto para que a história do repositório principal seja mais limpa e linear. Para entender como isso funciona, siga as recomendações abaixo:  
    1. Crie dois *commits* em **discrepantes** e um no **master**, e visualize o histórico do seu projeto local  
    2. Antes de integrar os dois *branches*, mude a base dos novos commits adicionados a **discrepantes** digitando  
       	**git rebase master**

       no *branch* **discrepantes**. Isso faz com que as modificações feitas em **discrepantes** sejam agora representadas por *commits* similares (não os mesmos) em **master**. Como você pode constatar que os *commits* são similares?

    3. Finalize o processo indo para **master** e digitando  
       	**git merge discrepantes**

       para que os dois branches apontem para o mesmo commit

    4. Visualize o histórico do seu projeto local. O que aconteceu de diferente em relação a um simples processo direto de *merge*, como feito no Item 7?  
    5. Integre as mudanças ao seu *fork*.  
15.  Opcionalmente, faça uma modificação no arquivo **AutoAvaliacao.feature** e registre-a, por exemplo, com uma mensagem como "novo cenário de visualização de percentual de discrepância". Se logo em seguida notamos que é necessário um pequeno ajuste nessa modificação, devemos fazer o ajuste e registrá-lo com uma mensagem como "pequeno ajuste no novo cenário de visualização de percentual de discrepância".   

    1. Faça esse ajuste

    2. Você acha que muitas sequências de *commits* desse tipo podem comprometer o entendimento do repositório principal e dificultar a revisão das contribuições? Por que?

    3. Para simplificar a história de desenvolvimento, digite 

    		**git rebase \-i HEAD\~2**

              No arquivo apresentado, digite o comando **squash** no local do **pick** do *commit* que você quer que seja unificado ao outro. Ajuste a mensagem do *commit* final para "novo cenário de visualização de percentual de discrepância". Por default, o editor apresentado é o vi. Se for esse o caso, use "esc" (sempre usado antes de invocar os comandos do editor) e depois ":wq" para gravar as modificações e sair do sistema. Para deletar um caracter, digite "x". Para deletar uma linha inteira, use "dd". Para inserir um caracter, use "i". 

    4. Analise o histórico do seu repositório. O que aconteceu? Qual o conteúdo do arquivo no *commit* final?

    5. Integre as mudanças ao seu *fork*.  
    6. Se você quisesse unificar 3, ao invés de apenas 2 *commits*, o que você mudaria nas ações feitas no Item c?

    7. Se você tivesse unificado *commits* que já tivessem sido enviados ao repositório principal, o que iria acontecer caso algum colega já tivesse baixado esses commits e integrados ao repositório dele? 

    8. Ao invés de criar um novo *commit* e usar o **squash**, como recomendado acima, você poderia ter usado o comando **git commit \--amend**? Indique o que esse comando pode fazer.  
16. Estando no *branch* **discrepantes**, e tendo feito uma mudança no arquivo **AutoAvaliacao.feature**, gravado o arquivo, sem ter dado ainda *commit*, mude para o *branch* **master**. Após essa operação, qual o conteúdo do arquivo **AutoAvaliacao.feature** no seu diretório de trabalho local? Esse conteúdo corresponde ao que você esperava? Por que? O que teria acontecido se, no *branch* **master**, o arquivo **AutoAvaliacao.feature** tivesse sido também modificado na mesma área em que ele foi modificado quando você estava no  *branch* **discrepantes**? Os comandos **git stash** poderiam ajudar nessa situação? Que comandos exatamente? Como?

17. Opcionalmente, tendo terminado o trabalho no *branch* **discrepantes**, você poderia apagá-lo? Que comando você usaria para isso? Qual o efeito desse comando (ele apaga exatamente o que? ponteiros? commits?)? 

18.  Opcionalmente, use o comando **git tag** para marcar o conteúdo de **master** como sendo a primeira versão da sua especificação de requisitos. Qual a vantagem disso?   
19. Supondo que você tenha feito modificações em vários arquivos no seu diretório de trabalho local, e tenha chegado a conclusão de que quer descartar essas modificações. Como você poderia usar o comando **git reset** para fazer isso? Com que parâmetros você chamaria esse comando? Qual a diferença entre esse comando e o **git checkout**?  
20. Opcionalmente, indique, listando os comandos específicos que você digitaria, como o comando **git config** pode ser usado para configurar seu usuário git (informações sobre autor e e-mail). Que outros tipos de informações podem ser configuradas com o comando **git config**?  
       
21. Opcionalmente, explique a utilidade dos comandos mv, rm, grep e bisect.

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>
