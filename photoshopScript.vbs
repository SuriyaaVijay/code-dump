' This Vb Script helps to opem a PhotoShop application and create a default 1080 * 1080 72px resolution document

set appRef = CreateObkect("PhotoShop.Application")

appRef.Documents.add(1080 , 1080 , 72 , "New Document" , 2 , 2, 1)
