clc
clear all
close all
outputfolder=fullfile('Final_Dataset');
category={'surprise','sad','neutral','happy','fear','disgust','angry'};
imds=imageDatastore(fullfile(outputfolder,category),'LabelSource','foldernames');
tb1=countEachLabel(imds);
[imdsTrain,imdsValidation]=splitEachLabel(imds,0.7,'randomized');
numTrainImages = numel(imdsTrain.Labels);
idx = randperm(numTrainImages,16);
figure
for i = 1:16
    subplot(4,4,i)
    I = readimage(imdsTrain,idx(i));
    imshow(I)
end
net = alexnet;
%%analyzeNetwork(net)
inputSize = net.Layers(1).InputSize;
%%replace final layers
layersTransfer = net.Layers(1:end-3);
%%No. of classess
numClasses = numel(categories(imdsTrain.Labels));
%%train network
layers = [
    layersTransfer
    fullyConnectedLayer(numClasses,'WeightLearnRateFactor',20,'BiasLearnRateFactor',20)
    softmaxLayer
    classificationLayer];
pixelRange = [-30 30];
imageAugmenter = imageDataAugmenter( ...
    'RandXReflection',true, ...
    'RandXTranslation',pixelRange, ...
    'RandYTranslation',pixelRange);
augimdsTrain = augmentedImageDatastore(inputSize(1:2),imdsTrain, ...
    'DataAugmentation',imageAugmenter);
augimdsValidation = augmentedImageDatastore(inputSize(1:2),imdsValidation);
options = trainingOptions('sgdm', 'InitialLearnRate', 0.001, 'MaxEpochs', 20, 'MiniBatchSize', 64,'Plots','training-progress');
netTransfer = trainNetwork(augimdsTrain,layers,options);
save netTransfer;
[YPred,scores] = classify(netTransfer,augimdsValidation);
idx = randperm(numel(imdsValidation.Files),4);
figure
for i = 1:4
    subplot(2,2,i)
    I = readimage(imdsValidation,idx(i));
    imshow(I)
    label = YPred(idx(i));
    title(string(label));
end
YValidation = imdsValidation.Labels;
accuracy = mean(YPred == YValidation)




