using System;
using System.Diagnostics;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Devices.Enumeration;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using Windows.Devices.Display;
using System.Collections.ObjectModel;
using Windows.UI.Core;

// Die Elementvorlage "Leere Seite" wird unter https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x407 dokumentiert.

namespace DeviceInfo
{
    /// <summary>
    /// Eine leere Seite, die eigenständig verwendet oder zu der innerhalb eines Rahmens navigiert werden kann.
    /// </summary>
    public sealed partial class MainPage : Page
    {

        DeviceWatcher deviceWatcher = DeviceInformation.CreateWatcher();

        public MainPage()
        {
            this.InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            //MediaElement mediaElement = new MediaElement();
            //var synth = new Windows.Media.SpeechSynthesis.SpeechSynthesizer();
            //Windows.Media.SpeechSynthesis.SpeechSynthesisStream stream = await
            //    synth.SynthesizeTextToStreamAsync("Devices Information is beeing collected");
            //mediaElement.SetSource(stream, stream.ContentType);
            //mediaElement.Play();


            //this.enumerateSnapshot();
            this.StartWatcher();
        }

        private async void enumerateSnapshot()
        {
            var deviceSelector = DisplayMonitor.GetDeviceSelector();
            var devices = await DeviceInformation.FindAllAsync(deviceSelector);

            foreach (var device in devices)
            {
                var monitor = await DisplayMonitor.FromInterfaceIdAsync(device.Id);
                Debug.WriteLine(monitor.DeviceId);
            }
        }

        public void StartWatcher()
        {
            // Connect events to update our collection as the watcher report results.
            deviceWatcher.Added += DeviceWatcher_Added;
            deviceWatcher.Updated += DeviceWatcher_Updated;
            deviceWatcher.Removed += DeviceWatcher_Removed;
            deviceWatcher.EnumerationCompleted += DeviceWatcher_EnumerationCompleted;
            deviceWatcher.Stopped += DeviceWatcher_Stopped;

            deviceWatcher.Start();
        }

        private void DeviceWatcher_Added(DeviceWatcher sender, DeviceInformation args)
        {
            //Debug.WriteLine(args.Id);
            //Debug.WriteLine(args.Kind);
            //var properties = args.Properties;
            //foreach(var property in properties)
            //{
            //    Debug.WriteLine(property);
            //}

            Debug.WriteLine("Device hinzugefügt: " + args.Id);
            Debug.WriteLine("");
        }

        private void DeviceWatcher_Updated(DeviceWatcher sender, DeviceInformationUpdate args)
        {
            Debug.WriteLine("");
            Debug.WriteLine("Device updated: " + args.Id);
            Debug.WriteLine("");
        }

        private void DeviceWatcher_Removed(DeviceWatcher sender, DeviceInformationUpdate args)
        {
            Debug.WriteLine("Folgendes Gerät wurde entfernt: " + args.Id);
            Debug.WriteLine("");
        }
        
        private void DeviceWatcher_EnumerationCompleted(DeviceWatcher sender, object args)
        {
            Debug.WriteLine("EnumerationComplete");
            Debug.WriteLine("");
        }

        private void DeviceWatcher_Stopped(DeviceWatcher sender, object args)
        {
            Debug.WriteLine("Devicewatcher stopped!");
            Debug.WriteLine("");
        }

        public void StopWatcher()
        {
            // Since the device watcher runs in the background, it is possible that
            // a notification is "in flight" at the time we stop the watcher.
            // In other words, it is possible for the watcher to become stopped while a
            // handler is running, or for a handler to run after the watcher has stopped.

            if (IsWatcherStarted(deviceWatcher))
            {
                // We do not null out the deviceWatcher yet because we want to receive
                // the Stopped event.
                deviceWatcher.Stop();
            }
        }

        public void Reset()
        {
            if (deviceWatcher != null)
            {
                StopWatcher();
                deviceWatcher = null;
            }
        }

        static bool IsWatcherStarted(DeviceWatcher watcher)
        {
            return (watcher.Status == DeviceWatcherStatus.Started) ||
                (watcher.Status == DeviceWatcherStatus.EnumerationCompleted);
        }
    }
}
