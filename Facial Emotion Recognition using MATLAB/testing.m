clc
close all
load('netTransfer.mat')
img=imread('happy man.jpg');
%imshow(img);
%face detection-initialization loading the weights
faceDetector=vision.CascadeObjectDetector;
bbox=step(faceDetector,img);
%figure,imshow(img);
if ~isempty(bbox)
    bbox=bbox(1,:);
    %plot box
    %rectangle('Position',bbox,'edgecolor','b','LineWidth',3);
    FaceCropped=imcrop(img,bbox);
end
FaceResized=imresize(FaceCropped,[227 227]);
[YPred,scores] = classify(netTransfer,FaceResized);
a=nominal(YPred)
pred_str=cellstr(a);
position=[0 0;];
boxColor={'red'};
RGB=insertText(img,position,pred_str,'FontSize',18,'BoxColor',boxColor,'BoxOpacity',0.4,'TextColor','Black');
figure,imshow(RGB);
rectangle('Position',bbox,'edgecolor','b','LineWidth',3);
    




