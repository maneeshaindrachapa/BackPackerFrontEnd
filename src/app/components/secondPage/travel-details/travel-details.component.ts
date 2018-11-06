import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { speedDialFabAnimations } from './travel-details-animations';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss'],
  animations: speedDialFabAnimations
})

export class TravelDetailsComponent implements OnInit {
  downsouthlat = 6.0250143;
  downsouthlng = 80.21804079999993;

  url = '../../../assets/img/icons/paper-plane.png';

  fabButtons = [
    {
      icon: 'timeline'
    },
    {
      icon: 'view_headline'
    },
    {
      icon: 'room'
    },
    {
      icon: 'lightbulb_outline'
    },
    {
      icon: 'lock'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';
  public mapstyles = [
    {
      featureType: 'all',
      elementType: 'geometry.fill',
      stylers: [
        {
          weight: '2.00'
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#9c9c9c'
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          color: '#f2f2f2'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 45
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#eeeeee'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#7b7b7b'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          color: '#98e7fb'
        },
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#98e7fb'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#070707'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'administrative.neighborhood',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
  }
  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
  open(content) {
    this.modalService.open(content);
  }
}
