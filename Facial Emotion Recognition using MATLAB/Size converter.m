clc
close all
clear all
mkdir('modified_images')
dd=dir('*.jpg');
for cntr=1:length(dd)
    img=imread(dd(cntr).name);
    imgresized=imresize(img,[227 227]);%%grey images, alexnet requires [227 227 3]RGB
   imgresized_RGB=cat(3,imgresized,imgresized,imgresized);%%227*227*3
  imwrite(imgresized_RGB,['modified_images\',dd(cntr).name]);
end
